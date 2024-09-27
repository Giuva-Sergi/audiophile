import styles from "./ModalHeader.module.css";

function ModalHeader() {
  return (
    <div className={styles.header}>
      <img
        src="/assets/checkout/icon-order-confirmation.svg"
        alt="order confirmation icon"
      />
      <h5>thank you for your order</h5>
      <p>You will receive an email confirmation shortly.</p>
    </div>
  );
}

export default ModalHeader;
