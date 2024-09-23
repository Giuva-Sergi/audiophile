import { Gallery } from "../../../types";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps {
  gallery: Gallery;
}
function ProductGallery({ gallery }: ProductGalleryProps) {
  return (
    <section className={styles.gallery}>
      <picture className={styles.first}>
        <source media="(max-width: 750px)" srcSet={gallery.first.mobile} />
        <source media="(max-width: 1000px)" srcSet={gallery.first.tablet} />
        <img src={gallery.first.desktop} alt="gallery image" />
      </picture>
      <picture className={styles.second}>
        <source media="(max-width: 750px)" srcSet={gallery.second.mobile} />
        <source media="(max-width: 1000px)" srcSet={gallery.second.tablet} />
        <img src={gallery.second.desktop} alt="gallery image" />
      </picture>
      <picture className={styles.third}>
        <source media="(max-width: 750px)" srcSet={gallery.third.mobile} />
        <source media="(max-width: 1000px)" srcSet={gallery.third.tablet} />
        <img src={gallery.third.desktop} alt="gallery image" />
      </picture>
    </section>
  );
}

export default ProductGallery;
