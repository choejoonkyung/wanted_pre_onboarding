import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ children, autoMilisec = 5000 }) {
  const [active, setActive] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [xDistance, setXdistance] = useState(0);
  const [carouselDelayFlag, setCarouselDelayFlag] = useState(false);
  const innerRef = useRef(null);
  const itemRef = useRef(null);

  const [swipeFlag, setSwipeFlag] = useState(false);
  const [startPoint, setStartPoint] = useState(0);
  const [swipedX, setSwipedX] = useState(0);

  const controlTransition = (newAtive) =>
    new Promise((resolve, reject) => {
      setCarouselDelayFlag(true);
      setActive(() => {
        innerRef.current.style.transition = "transform 0.3s";
        return newAtive;
      });
      setTimeout(() => {
        innerRef.current.style.transition = "";
      }, 300);
      resolve();
    });

  const controlCarousel = async (newActive) => {
    if (carouselDelayFlag) return;
    setTimeout(() => {
      setCarouselDelayFlag(false);
    }, 500);

    await controlTransition(newActive);
    checkActiveForTransform(newActive);
  };

  const checkActiveForTransform = (newActive) =>
    setTimeout(() => {
      const lenght = Object.keys(children).length;
      if (newActive === -1) {
        setActive(lenght - 1);
        return;
      }
      if (newActive >= lenght) {
        setActive(0);
        return;
      }
    }, 300);

  const calculatePosition = () => {
    const item = itemRef.current;
    const x = document.documentElement.clientWidth - item?.offsetWidth;
    setItemWidth(item.offsetWidth);
    setXdistance(x / 2);
  };

  const calculateTranslateX = () => {
    if (xDistance === 0 && itemWidth === 0) {
      return 10000;
    }
    return xDistance - 2 * itemWidth - active * itemWidth - 40 - swipedX;
  };

  const startSwipeCarousel = (e) => {
    if (e.type === "touchstart") {
      setSwipeFlag(true);
      setStartPoint(e.changedTouches[0].clientX);
      return;
    }

    e.preventDefault();
    setSwipeFlag(true);
    setStartPoint(e.clientX);
  };

  const doneSwipeCarousel = (e) => {
    const absSwipedX = Math.abs(swipedX);
    const positive = Math.sign(swipedX) === 1 ? true : false;
    if (itemWidth / 2 - 100 < absSwipedX) {
      controlTransition(positive ? active + 1 : active - 1);
      checkActiveForTransform(positive ? active + 1 : active - 1);
      setCarouselDelayFlag(true);
    }

    if (absSwipedX > 0) {
      setCarouselDelayFlag(true);
    }

    setSwipedX(0);
    setSwipeFlag(false);
    setTimeout(() => {
      setCarouselDelayFlag(false);
    }, 400);
  };

  const onSwipeCarousel = (e) => {
    if (!swipeFlag) return;
    if (carouselDelayFlag) return;

    if (e.type === "touchmove") {
      setSwipeFlag(true);
      setSwipedX(startPoint - e.changedTouches[0].clientX);
      return;
    }

    e.preventDefault();
    setSwipedX(startPoint - e.clientX);
  };

  const onClickEventHandler = (e) => {
    if (carouselDelayFlag) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      controlCarousel(active + 1);
    }, autoMilisec);
    return () => {
      if (autoSlide) {
        clearInterval(autoSlide);
      }
    };
  });

  useEffect(() => {
    const innerItemObserver = new ResizeObserver(() => {
      calculatePosition();
    });

    innerItemObserver.observe(itemRef.current);
    window.addEventListener("resize", calculatePosition);

    return () => {
      window.removeEventListener("resize", calculatePosition);
    };
  }, []);

  useEffect(() => {
    setActive(Math.floor(Math.random() * Object.keys(children).length));
  }, [children]);

  return (
    <div className={styles.carousel}>
      <div
        style={{ padding: "0px 40px" }}
        onMouseDown={startSwipeCarousel}
        onMouseUp={doneSwipeCarousel}
        onMouseLeave={doneSwipeCarousel}
        onMouseMove={onSwipeCarousel}
        onTouchStart={startSwipeCarousel}
        onTouchEnd={doneSwipeCarousel}
        onTouchMove={onSwipeCarousel}
        onClick={onClickEventHandler}
      >
        <div
          className={styles.inner}
          ref={innerRef}
          style={{
            transform: `translateX(${calculateTranslateX()}px)`,
          }}
        >
          <div className={styles.innerItem} ref={itemRef}>
            {React.cloneElement(
              React.Children.toArray(children)[
                React.Children.toArray(children).length - 2
              ],
              { current: false }
            )}
          </div>
          <div className={styles.innerItem}>
            {React.cloneElement(
              React.Children.toArray(children)[
                React.Children.toArray(children).length - 1
              ],
              { current: active === -1 }
            )}
          </div>
          {React.Children.map(children, (child, index) => {
            return (
              <div className={styles.innerItem}>
                {React.cloneElement(child, { current: index === active })}
              </div>
            );
          })}
          <div className={styles.innerItem}>
            {React.cloneElement(React.Children.toArray(children)[0], {
              current: active === Object.keys(children).length,
            })}
          </div>
          <div className={styles.innerItem}>
            {React.cloneElement(React.Children.toArray(children)[1], {
              current: false,
            })}
          </div>
        </div>
      </div>

      <button
        className={styles.prevArrow}
        onClick={() => {
          controlCarousel(active - 1);
        }}
        style={{ left: xDistance - 60 }}
      >
        <span>
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
      <button
        className={styles.nextArrow}
        onClick={() => {
          controlCarousel(active + 1);
        }}
        style={{ right: xDistance - 60 }}
      >
        <span>
          <svg
            className="SvgIcon_SvgIcon__root__svg__DKYBi"
            viewBox="0 0 18 18"
          >
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
