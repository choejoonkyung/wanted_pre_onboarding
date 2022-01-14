import styles from "./GNB.module.css";
import "./wanted.css";

function GNB() {
  return (
    <nav className={styles.GNB}>
      <div className={styles.wrapper}>
        <aside className={styles.aside}>
          <button className={styles.hamberger}>
            <img
              className={styles.hambergericon}
              src="https://static.wanted.co.kr/images/icon-menu.png"
              alt="hamberger menu"
            ></img>
          </button>
          <i className={`icon-logo_new ${styles.icon}`}></i>
        </aside>
      </div>
    </nav>
  );
}

export default GNB;
