import CategoryCard from "./CategoryCard";
import styles from "./SecondaryNavigation.module.css";
import classNames from "classnames";

const categories = ["headphones", "speakers", "earphones"];

interface SecondaryNavigationProps {
  isMenu?: boolean;
  isOpened?: boolean;
}

function SecondaryNavigation({ isMenu, isOpened }: SecondaryNavigationProps) {
  const content = (
    <nav className={styles.secondaryNav}>
      <ul
        className={classNames(styles.navLinks, { [styles.menuLinks]: isMenu })}
      >
        {categories.map((cat, i) => (
          <CategoryCard key={i} text={cat} />
        ))}
      </ul>
    </nav>
  );

  return isMenu ? (
    <div
      className={classNames(styles.menuWrapper, {
        [styles.menuOpened]: isOpened,
      })}
    >
      {content}
    </div>
  ) : (
    content
  );
}

export default SecondaryNavigation;
