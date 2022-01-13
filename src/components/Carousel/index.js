import React, { useEffect, useRef, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ children, autoMilisec = 5000 }) {
  const [active, setActive] = useState(1);
  const [itemWidth, setItemWidth] = useState(0);
  const [xDistance, setXdistance] = useState(0);
  const ref = useRef(null);

  const control = (newActive) => {
    const lenght = Object.keys(children).length;
    console.log(newActive);
    if (newActive === -1) {
      setActive(lenght - 1);
      return;
    }
    if (newActive >= lenght) {
      setActive(0);
      return;
    }
    setActive(newActive);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      control(active + 1);
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
            xDistance - itemWidth - active * itemWidth
          }px)`,
        }}
      >
        <div className={`${styles.innerItem} inner-item`}>
          {React.cloneElement(React.Children.toArray(children)[0], {
            current: false,
          })}
        </div>
        {React.Children.map(children, (child, index) => {
          return (
            <div className={`${styles.innerItem} inner-item`}>
              {React.cloneElement(child, { current: index === active })}
            </div>
          );
        })}
        <div className={`${styles.innerItem} inner-item`}>
          {React.cloneElement(
            React.Children.toArray(children)[React.Children.count()],
            { current: false }
          )}
        </div>
      </div>

      <div>
        <button
          onClick={() => {
            control(active - 1);
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            control(active + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
