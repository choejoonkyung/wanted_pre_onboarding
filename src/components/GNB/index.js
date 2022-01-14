import BetaIcon from "./BetaIcon";
import styles from "./GNB.module.css";
import NewIcon from "./NewIcon";
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

        <ul className={styles.menus}>
          <li className={styles.menu}>
            <span>채용</span>
          </li>
          <li className={styles.menu}>
            <span>이벤트</span>
          </li>
          <li className={styles.menu}>
            <span>직군별 연봉</span>
          </li>
          <li className={styles.menu}>
            <span>이력서</span>
          </li>
          <li className={styles.menu}>
            <span>커뮤니티</span>
            <NewIcon className={styles.newicon} />
          </li>
          <li className={styles.menu}>프리랜서</li>
          <li className={styles.menu}>
            <span>AI 합격예측</span>
            <BetaIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default GNB;
