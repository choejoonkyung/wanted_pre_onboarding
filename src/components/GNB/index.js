import BetaIcon from "../../icons/BetaIcon";
import styles from "./GNB.module.css";
import NewIcon from "../../icons/NewIcon";
import "./wanted.css";
import SearchIcon from "../../icons/SearchIcon";
import AlertIcon from "../../icons/AlertIcon";
import NewBadge from "../../icons/NewBadge";
import DocIcon from "../../icons/DocIcon";

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
          <li className={styles.homeMenu}>
            <span>홈</span>
          </li>
          <li className={styles.menu}>
            <span>채용</span>
          </li>
          <li className={styles.menu}>
            <span>이벤트</span>
          </li>
          <li className={`${styles.menu} ${styles.resMenu}`}>
            <span>직군별 연봉</span>
          </li>
          <li className={`${styles.menu} ${styles.resMenu}`}>
            <span>이력서</span>
          </li>
          <li className={`${styles.menu} ${styles.resMenu}`}>
            <span>
              커뮤니티
              <NewIcon className={styles.newicon} />
            </span>
          </li>
          <li className={`${styles.menu} ${styles.resMenu}`}>
            <span>프리랜서</span>
          </li>
          <li className={`${styles.menu} ${styles.resMenu}`}>
            <span>
              AI 합격예측
              <BetaIcon />
            </span>
          </li>
        </ul>

        <aside>
          <ul className={styles.my}>
            <li className={styles.myItem}>
              <button className={styles.button}>
                <SearchIcon />
              </button>
            </li>
            <li className={styles.myItem}>
              <button className={styles.button}>
                <AlertIcon />
                <NewBadge top="0px" right="3px" />
              </button>
            </li>
            <li className={styles.myItem}>
              <div className={styles.avatarWrapper}>
                <span>
                  <div className={styles.avatarImage}></div>
                  <NewBadge top="-3px" right="-3px" />
                </span>
              </div>
            </li>
            <li className={styles.hr}></li>
            <li>
              <button className={styles.service}>기업 서비스</button>
            </li>
            <li className={styles.doc}>
              <DocIcon />
            </li>
          </ul>
        </aside>
      </div>
    </nav>
  );
}

export default GNB;
