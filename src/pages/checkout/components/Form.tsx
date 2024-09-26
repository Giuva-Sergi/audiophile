import { SubmitHandler, useForm } from "react-hook-form";
import Button from "../../../components/Button";
import styles from "./Form.module.css";
import { FieldsValue, fieldsValueSchema } from "../../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import classNames from "classnames";

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FieldsValue>({
    resolver: zodResolver(fieldsValueSchema),
  });

  const onSubmit: SubmitHandler<FieldsValue> = (data) => {
    console.log("FORM DATA:", data);
    console.log("FORM ERRORS:", errors);
  };

  return (
    <section className={styles.formSection}>
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.formGroup}>
          <p className={styles.fieldType}>billing details</p>
          <div className={styles.groupedInput}>
            <div className={styles.inputContainer}>
              <div className={styles.errorContainer}>
                <label htmlFor="name">Name</label>
                {errors.name && <span>{errors.name.message}</span>}
              </div>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Alexei Ward"
                className={errors.name && styles.inputError}
              />
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.errorContainer}>
                <label htmlFor="email">Email Address</label>
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <input
                {...register("email")}
                type="text"
                id="email"
                placeholder="alexei@gmail.com"
                className={errors.email && styles.inputError}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.inputContainer} ${styles.halfWidth}`}>
          <div className={styles.errorContainer}>
            <label htmlFor="number">Phone Number</label>
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>
          <input
            {...register("phone")}
            type="tel"
            id="number"
            placeholder="00393401234567"
            className={errors.phone && styles.inputError}
          />
        </div>
        <div className={styles.formGroup}>
          <p className={styles.fieldType}>shipping info</p>
          <div className={styles.inputContainer}>
            <div className={styles.errorContainer}>
              <label htmlFor="address">Address</label>
              {errors.address && <span>{errors.address.message}</span>}
            </div>
            <input
              {...register("address")}
              type="address"
              id="address"
              placeholder="1137 Williams Avenue"
              className={errors.address && styles.inputError}
            />
          </div>
          <div className={styles.groupedInput}>
            <div className={styles.inputContainer}>
              <div className={styles.errorContainer}>
                <label htmlFor="zip">ZIP Code</label>
                {errors.zipCode && <span>{errors.zipCode.message}</span>}
              </div>
              <input
                {...register("zipCode")}
                type="text"
                id="zip"
                placeholder="10001"
                className={errors.zipCode && styles.inputError}
              />
            </div>
            <div className={styles.inputContainer}>
              <div className={styles.errorContainer}>
                <label htmlFor="city">City</label>
                {errors.city && <span>{errors.city.message}</span>}
              </div>
              <input
                {...register("city")}
                type="text"
                id="city"
                placeholder="New York"
                className={errors.city && styles.inputError}
              />
            </div>
          </div>
          <div className={`${styles.inputContainer} ${styles.halfWidth}`}>
            <div className={styles.errorContainer}>
              <label htmlFor="country">Country</label>
              {errors.country && <span>{errors.country.message}</span>}
            </div>
            <input
              {...register("country")}
              type="text"
              id="country"
              placeholder="United States"
              className={errors.country && styles.inputError}
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <p className={styles.fieldType}>payment details</p>
          <div className={styles.flexGroup}>
            <div>
              <span>Payment Method</span>
              {errors.paymentMethod && (
                <span>{errors.paymentMethod.message}</span>
              )}
            </div>
            <div>
              <div
                className={classNames(styles.radioContainer, {
                  [styles.radioError]: errors.paymentMethod,
                })}
              >
                <input
                  {...register("paymentMethod")}
                  type="radio"
                  id="e-money"
                  value="e-money"
                  className={errors.paymentMethod && styles.inputError}
                />
                <label htmlFor="e-money">e-Money</label>
              </div>
              <div
                className={classNames(styles.radioContainer, {
                  [styles.radioError]: errors.paymentMethod,
                })}
              >
                <input
                  {...register("paymentMethod")}
                  type="radio"
                  id="cash"
                  value="cash"
                />
                <label htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>
          </div>
          {watch("paymentMethod") === "e-money" && (
            <>
              <div className={styles.groupedInput}>
                <div className={styles.inputContainer}>
                  <div className={styles.errorContainer}>
                    <label htmlFor="card-number">e-Money Number</label>
                    {errors.cardNumber && (
                      <span>{errors.cardNumber.message}</span>
                    )}
                  </div>
                  <input
                    {...register("cardNumber")}
                    type="text"
                    id="card-number"
                  />
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.errorContainer}>
                    <label htmlFor="card-pin">e-Money Pin</label>
                    {errors.cardPin && <span>{errors.cardPin.message}</span>}
                  </div>
                  <input
                    {...register("cardPin")}
                    type="password"
                    id="card-pin"
                  />
                </div>
              </div>
            </>
          )}
          {watch("paymentMethod") === "cash" && (
            <>
              <div className={styles.disclaimer}>
                <img
                  src="/assets/checkout/icon-cash-on-delivery.svg"
                  alt="cash on delivery icon"
                />
                <p>
                  The ‘Cash on Delivery’ option enables you to pay in cash when
                  our delivery courier arrives at your residence. Just make sure
                  your address is correct so that your order will not be
                  cancelled.
                </p>
              </div>
            </>
          )}
        </div>
        <Button type="dense" text="continue & pay" />
      </form>
    </section>
  );
}

export default Form;
