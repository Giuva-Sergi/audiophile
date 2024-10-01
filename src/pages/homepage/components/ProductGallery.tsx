import Button from "../../../components/Button";
import styles from "./ProductGallery.module.css";
import data from "../../../data/data.json";

function ProductGallery() {
  const zx9 = data.find((prod) => prod.id === 6);
  const zx7 = data.find((prod) => prod.id === 5);
  const yx1 = data.find((prod) => prod.id === 1);

  return (
    <section className={styles.productGallery}>
      <div className={styles.productCard}>
        <picture className={styles.pictureContainer}>
          <source
            media="(max-width: 800px)"
            srcSet="/assets/home/mobile/image-speaker-zx9.png"
          />
          <source
            media="(max-width: 1000px)"
            srcSet="/assets/home/tablet/image-speaker-zx9.png"
          />
          <img
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="Image of speakers model ZX9"
          />
        </picture>
        <div className={styles.textContainer}>
          <h1>ZX9 SPEAKER</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button
            text="see product"
            type="outline"
            path={`product/${zx9?.category}/${zx9?.slug}`}
          />
        </div>
      </div>
      <div className={styles.secondaryProductCard}>
        <div className={styles.innerContainer}>
          <h4 className={styles.subHeader}>ZX7 SPEAKER</h4>
          <Button
            text="see product"
            type="outline"
            path={`product/${zx7?.category}/${zx7?.slug}`}
          />
        </div>
      </div>
      <div className={styles.productCardFlex}>
        <picture className={styles.pictureFlex}>
          <source
            media="(max-width: 800px)"
            srcSet="/assets/home/mobile/image-earphones-yx1.jpg"
          />
          <source
            media="(max-width: 1000px)"
            srcSet="/assets/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            src="/assets/home/desktop/image-earphones-yx1.jpg"
            alt="Image of speakers model ZX9"
          />
        </picture>
        <div className={styles.innerContainerFlex}>
          <h4 className={styles.subHeader}>YX1 EARPLUGS</h4>
          <Button
            text="see product"
            type="outline"
            path={`product/${yx1?.category}/${yx1?.slug}`}
          />
        </div>
      </div>
    </section>
  );
}

export default ProductGallery;
