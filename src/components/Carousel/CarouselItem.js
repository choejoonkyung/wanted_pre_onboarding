import styles from "./Carousel.module.css";

function CarouselItem({ img, title, subtitle, link }) {
  return (
    <article className={styles.item}>
      <div className={styles.imageview}></div>
      <div className={styles.detailview}></div>
    </article>
  );
}

export default CarouselItem;
