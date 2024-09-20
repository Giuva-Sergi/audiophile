import { useParams } from "react-router-dom";
// import styles from "./ProductDetail.module.css";
import data from "../../data/data.json";

function ProductDetail() {
  const { slug } = useParams();

  const product = data.find((prod) => prod.slug === slug);
  return <div>{JSON.stringify(product)}</div>;
}

export default ProductDetail;
