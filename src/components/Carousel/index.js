import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ children, autoMilisec = 5000 }) {
  const [active, setActive] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [xDistance, setXdistance] = useState(0);
  const [flag, setFlag] = useState(false);
  const ref = useRef(null);

  const controlTransition = (newAtive) =>
    new Promise((resolve, reject) => {
      setFlag(true);
      setActive(() => {
        ref.current.style.transition = "transform 0.3s";
        return newAtive;
      });
      setTimeout(() => {
        ref.current.style.transition = "";
        setFlag(false);
      }, 300);
      resolve();
    });

  const controlCarousel = async (newActive) => {
    // 다수의 입력 방지 플래그
    if (flag) return;
    await controlTransition(newActive);

    // active가 -1이거나 children 길이를 초과하게 될 때
    // 실제 좌우에 데이터가 존재하는 위치로 이동 시키는 처리.
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
    const calculate = () => {
      const item = document.querySelector(".inner-item");
      const x = document.documentElement.clientWidth - item.clientWidth;
      setItemWidth(item.clientWidth);
      setXdistance(x / 2);
    };

    calculate();
    window.addEventListener("resize", calculate);

    return () => {
      window.removeEventListener("resize", calculate);
    };
  }, []);

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        ref={ref}
        style={{
          transform: `translateX(${
            xDistance - 2 * itemWidth - active * itemWidth
          }px)`,
        }}
      >
        <div className={`${styles.innerItem} inner-item`}>
          {React.cloneElement(
            React.Children.toArray(children)[
              React.Children.toArray(children).length - 2
            ],
            { current: false }
          )}
        </div>
        <div className={`${styles.innerItem} inner-item`}>
          {React.cloneElement(
            React.Children.toArray(children)[
              React.Children.toArray(children).length - 1
            ],
            { current: active === -1 }
          )}
        </div>
        {React.Children.map(children, (child, index) => {
          return (
            <div className={`${styles.innerItem} inner-item`}>
              {React.cloneElement(child, { current: index === active })}
            </div>
          );
        })}
        <div className={`${styles.innerItem} inner-item`}>
          {React.cloneElement(React.Children.toArray(children)[0], {
            current: active === Object.keys(children).length,
          })}
        </div>
        <div className={`${styles.innerItem} inner-item`}>
          {React.cloneElement(React.Children.toArray(children)[1], {
            current: false,
          })}
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
          <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
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
          <svg class="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
            <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
}

export default Carousel;
