import Container from "../../components/Container";
import styles from "./CheckoutPage.module.css";
import Form from "./components/Form";

function CheckoutPage() {
  return (
    <Container>
      <div className={styles.checkoutContainer}>
        <Form />
        <section className={styles.summarySection}>SUMMARY SECTION</section>
      </div>
    </Container>
  );
}

export default CheckoutPage;
