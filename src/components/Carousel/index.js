import React from "react";
import styles from "./Carousel.module.css";

function Carousel({ children }) {
  return (
    <div className={styles.carousel}>
      <div className={styles.inner} style={{ transform: "translateX(-200%)" }}>
        {React.Children.map(children, (child, _) => {
          return (
            <div className={styles.innerItem} style={{ width: "100%" }}>
              {React.cloneElement(child)}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
