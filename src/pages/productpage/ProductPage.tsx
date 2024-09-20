import { useParams } from "react-router-dom";
import styles from "./ProductPage.module.css";
import Container from "../../components/Container";
function ProductPage() {
  const { productCategory } = useParams();

  return (
    <>
      <h2 className={styles.productHeader}>{productCategory}</h2>
      <Container>
        <main className={styles.main}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            numquam placeat, velit aut nostrum architecto, quam exercitationem
            veniam, repellendus consequuntur optio fugiat repudiandae? Culpa
            exercitationem aut deleniti cupiditate quae ipsam. Illo incidunt
            fuga, vero sit corporis repellendus nemo nam eaque deleniti repellat
            ipsam! Sunt reprehenderit ipsum perspiciatis veniam accusamus a
            laudantium, ipsam numquam aliquam quod vitae delectus commodi modi
            quas? Veniam tenetur repellendus quam magnam, vitae repellat sequi
            quo ab quidem consequuntur? Architecto, aperiam nulla et velit sequi
            iure obcaecati odio deserunt alias quidem omnis, id sapiente fugit
            illum doloribus!
          </p>
        </main>
      </Container>
    </>
  );
}

export default ProductPage;
