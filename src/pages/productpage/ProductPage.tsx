import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import Container from "../../components/Container";
import data from "../../data/data.json";
import SecondaryNavigation from "../../components/SecondaryNavigation";
import SecondaryFooter from "../../components/SecondaryFooter";
import ProductFeature from "./ProductFeature";
import Main from "../../components/Main";

function ProductPage() {
  const { productCategory } = useParams();

  const filteredProducts = data.filter(
    (product) => product.category === productCategory
  );

  return (
    <>
      <h2 className={styles.productHeader}>{productCategory}</h2>
      <Container>
        <Main>
          {filteredProducts.map((prod, i) => (
            <ProductFeature
              key={prod.id}
              product={{
                ...prod,
                others: prod.others.map((el) => ({
                  ...el,
                  category: prod.category,
                })),
              }}
              reverse={i % 2 ? false : true}
            />
          ))}
        </Main>
        <SecondaryNavigation />
        <SecondaryFooter />
      </Container>
    </>
  );
}

export default ProductPage;
