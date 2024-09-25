import styles from "./Form.module.css";

function Form() {
  return (
    <section className={styles.formSection}>
      <h3>Checkout</h3>
      <form>
        <div className={styles.formGroup}>
          <p className={styles.fieldType}>billing details</p>
          <div className={styles.groupedInput}>
            <div className={styles.inputContainer}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Alexei Ward" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="email">Email Address</label>
              <input type="text" id="email" placeholder="alexei@gmail.com" />
            </div>
          </div>
          <div className={`${styles.inputContainer} ${styles.halfWidth}`}>
            <label htmlFor="number">Phone Number</label>
            <input type="tel" id="number" placeholder="+39 340-1234567" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <p className={styles.fieldType}>shipping info</p>
          <div className={styles.inputContainer}>
            <label htmlFor="address">Address</label>
            <input
              type="address"
              id="number"
              placeholder="1137 Williams Avenue"
            />
          </div>
          <div className={styles.groupedInput}>
            <div className={styles.inputContainer}>
              <label htmlFor="zip">ZIP Code</label>
              <input type="numeric" id="zip" placeholder="10001" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="city">City</label>
              <input type="text" id="city" placeholder="New York" />
            </div>
          </div>
          <div className={`${styles.inputContainer} ${styles.halfWidth}`}>
            <label htmlFor="country">Country</label>
            <input type="text" id="country" placeholder="United States" />
          </div>
        </div>
        <div className={styles.formGroup}>
          <p className={styles.fieldType}>payment details</p>
          <div className={styles.flexGroup}>
            <span>Payment Method</span>
            <div>
              <div className={styles.radioContainer}>
                <input type="radio" id="e-money" />
                <label htmlFor="e-money">e-Money</label>
              </div>
              <div className={styles.radioContainer}>
                <input type="radio" id="cash" />
                <label htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>
          </div>
          <div className={styles.groupedInput}>
            <div className={styles.inputContainer}>
              <label htmlFor="card-number">e-Money Number</label>
              <input type="numeric" id="card-number" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="card-pin">e-Money Pin</label>
              <input type="numeric" id="card-pin" />
            </div>
          </div>
        </div>
      </form>
      <div className={styles.disclaimer}>
        <img
          src="/assets/checkout/icon-cash-on-delivery.svg"
          alt="cash on delivery icon"
        />
        <p>
          The ‘Cash on Delivery’ option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.
        </p>
      </div>
    </section>
  );
}

export default Form;
