import { useEffect } from "react";
import CartContainer from "../../cart/CartContainer";
import Container from "../../components/Container";
import styles from "./CheckoutPage.module.css";
import Form from "./components/Form";

function CheckoutPage() {
  useEffect(() => {
    document.querySelector("body")!.style.backgroundColor =
      "var(--accent-clr-200)";

    return () =>
      (document.querySelector("body")!.style.backgroundColor = "transparent");
  }, []);
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
