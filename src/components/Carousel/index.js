import React, { useState } from "react";
import styles from "./Carousel.module.css";

function Carousel({ children }) {
  const [active, setActive] = useState(0);

  const controlActive = (newActive) => {
    if (newActive < 0) {
      setActive(0);
      return;
    }

    if (newActive >= React.Children.count(children)) return;

    setActive(newActive);
  };

  return (
    <div className={styles.carousel}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {React.Children.map(children, (child, _) => {
          return (
            <div className={styles.innerItem} style={{ width: "100%" }}>
              {React.cloneElement(child)}
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
