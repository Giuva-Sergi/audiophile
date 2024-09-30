import { SetStateAction } from "react";
import CategoryCard from "./CategoryCard";
import styles from "./SecondaryNavigation.module.css";
import classNames from "classnames";

const categories = ["headphones", "speakers", "earphones"];

interface SecondaryNavigationProps {
  isMenu?: boolean;
  isOpened?: boolean;
  setIsMenuOpened?: React.Dispatch<SetStateAction<boolean>>;
}

function SecondaryNavigation({
  isMenu,
  isOpened,
  setIsMenuOpened,
}: SecondaryNavigationProps) {
  const content = (
    <nav
      className={styles.secondaryNav}
      id="secondary-navigation"
      {...(isMenu && { "aria-labelledby": "menu-toggle-button" })}
    >
      <ul
        className={classNames(styles.navLinks, { [styles.menuLinks]: isMenu })}
      >
        {categories.map((cat, i) => (
          <CategoryCard key={i} text={cat} handlerFunction={setIsMenuOpened} />
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
