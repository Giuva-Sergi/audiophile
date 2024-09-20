import styles from "./Header.module.css";
import Navbar from "./Navbar";
import Container from "../Container";
import { useEffect, useState } from "react";
import SecondaryNavigation from "../SecondaryNavigation";

function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  useEffect(() => {
    if (isMenuOpened) {
      document.querySelector("body")!.style.overflow = "hidden";
    } else {
      document.querySelector("body")!.style.overflow = "";
    }
    return () => {
      document.querySelector("body")!.style.overflow = "";
    };
  }, [isMenuOpened]);

  return (
    <>
      <header className={styles.header}>
        <Container>
          <Navbar
            isMenuOpened={isMenuOpened}
            setIsMenuOpened={setIsMenuOpened}
          />
        </Container>
      </header>
      {isMenuOpened && (
        <SecondaryNavigation isMenu={true} isOpened={isMenuOpened} />
      )}
    </>
  );
}

export default Header;
