import { useNavigate, useParams } from "react-router-dom";
import styles from "./ProductDetail.module.css";
import data from "../../data/data.json";
import Container from "../../components/Container";
import SecondaryNavigation from "../../components/SecondaryNavigation";
import SecondaryFooter from "../../components/SecondaryFooter";
import Main from "../../components/Main";
import ProductArticle from "../productpage/ProductArticle";
import ProductGallery from "./components/ProductGallery";
import OtherCard from "./components/OtherCard";

function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const product = data.find((prod) => prod.slug === slug);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <Container>
      <Main>
        <button className={styles.btnNavigate} onClick={() => navigate(-1)}>
          Go back
        </button>
        <section className={styles.displaySection}>
          <picture className={styles.pictureContainer}>
            <source media="(max-width: 750px)" srcSet={product.image.mobile} />
            <source media="(max-width: 1000px)" srcSet={product.image.tablet} />
            <img src={product.image.desktop} alt={`${product.name} photo`} />
          </picture>
          <ProductArticle
            product={{
              id: product.id,
              name: product.name,
              new: product.new,
              description: product.description,
              slug: product.slug,
              price: product.price,
            }}
            detailPage={true}
          />
        </section>
        <section className={styles.features}>
          <div className={styles.featuresContainer}>
            <h3>Features</h3>
            <p>{product.features}</p>
          </div>
          <div className={styles.featuresContainer}>
            <h3>In the box</h3>
            <ul>
              {product.includes.map((item, i) => (
                <li key={i}>
                  <span>{item.quantity}x</span>
                  <span>{item.item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <ProductGallery gallery={product.gallery} />
        <section className={styles.others}>
          <h3>you may also like</h3>
          <ul>
            {product.others.map((other, i) => (
              <OtherCard
                key={i}
                product={{ ...other, category: product.category }}
              />
            ))}
          </ul>
        </section>
      </Main>
      <SecondaryNavigation />
      <SecondaryFooter />
    </Container>
  );
}

export default ProductDetail;
