import CartContainer from "../../cart/CartContainer";
import Container from "../../components/Container";
import styles from "./CheckoutPage.module.css";
import Form from "./components/Form";

function CheckoutPage() {
  return (
    <Container>
      <div className={styles.checkoutContainer}>
        <Form />
        <CartContainer checkout={true} />
      </div>
    </Container>
  );
}

export default CheckoutPage;
