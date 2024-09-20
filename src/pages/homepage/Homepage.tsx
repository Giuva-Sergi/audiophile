import styles from "./Homepage.module.css";
import Container from "../../components/Container";
import NewProduct from "./components/NewProduct";
import SecondaryNavigation from "../../components/SecondaryNavigation";
import Main from "./components/Main";
import SecondaryFooter from "../../components/SecondaryFooter";
import ProductGallery from "./components/ProductGallery";

function Homepage() {
  return (
    <>
      <section className={styles.hero}>
        <Container>
          <NewProduct />
        </Container>
      </section>
      <Container>
        <Main>
          <SecondaryNavigation />
          <ProductGallery />
          <SecondaryFooter />
        </Main>
      </Container>
    </>
  );
}

export default Homepage;
