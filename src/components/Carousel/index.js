import React, { useEffect, useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ children, autoMilisec = 5000 }) {
  const [active, setActive] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [xDistance, setXdistance] = useState(0);

  const controlActive = (newActive) => {
    if (newActive < 0) {
      setActive(0);
      return;
    }

    if (newActive >= React.Children.count(children)) return;

    setActive(newActive);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      controlActive(active + 1);
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
        style={{
          transform: `translateX(${
            xDistance - itemWidth - active * itemWidth
          }px)`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return (
            <div
              className={`${styles.innerItem} inner-item`}
              style={{
                filter: index === active + 1 ? "" : "brightness(50%)",
              }}
            >
              {React.cloneElement(child, { current: index === active + 1 })}
            </div>
          );
        })}
      </div>

      <div>
        <button
          onClick={() => {
            controlActive(active - 1);
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            controlActive(active + 1);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Carousel;
