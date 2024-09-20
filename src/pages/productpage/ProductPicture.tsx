import { Image } from "../../types";
import styles from "./ProductPicture.module.css";

interface PictureProps {
  image: Image;
  name: string;
}

function ProductPicture({ image, name }: PictureProps) {
  return (
    <picture className={styles.picture}>
      <source media="(max-width: 750px)" srcSet={image.mobile} />
      <source media="(max-width: 1000px)" srcSet={image.tablet} />
      <img src={image.desktop} alt={`${name} photo`} />
    </picture>
  );
}

export default ProductPicture;
