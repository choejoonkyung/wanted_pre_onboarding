import styles from "./Carousel.module.css";

function CarouselItem({ img, title, subtitle, link, current }) {
  console.log(current);
  return (
    <article className={styles.item}>
      <div className={styles.imageview}>
        <a href={link} target="_blank" rel="noreferrer">
          <img
            className={styles.image}
            src={img}
            alt={`${title}의 대표이미지`}
          ></img>
        </a>
      </div>

      {current && (
        <div className={styles.detailview}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <hr className={styles.spar} />
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <span>
              바로가기 <span>{">"}</span>
            </span>
          </a>
        </div>
      )}
    </article>
  );
}

export default CarouselItem;
