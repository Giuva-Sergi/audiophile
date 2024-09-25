import { SetStateAction } from "react";
import Button from "./Button";
import styles from "./CategoryCard.module.css";

interface CategoryCardProps {
  text: string;
  handlerFunction?: React.Dispatch<SetStateAction<boolean>>;
}

function CategoryCard({ text, handlerFunction }: CategoryCardProps) {
  return (
    <li className={styles.card}>
      <img
        src={`/assets/shared/desktop/image-category-thumbnail-${text}.png`}
        alt={`${text} thumbnail`}
        className={styles.thumbnail}
      />
      <div>
        <h6>{text}</h6>
        <Button
          type="transparent"
          path={`/product/${text}`}
          text="shop"
          functionHandler={() => handlerFunction && handlerFunction(false)}
        />
      </div>
    </li>
  );
}

export default CategoryCard;
