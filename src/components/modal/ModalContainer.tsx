import { useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./ModalContainer.module.css";
import ModalHeader from "./ModalHeader";
import ModalSummary from "./ModalSummary";
import { useDispatch } from "react-redux";
import { handleCheckOut, removeAllItems } from "../../cart/cartSlice";

function ModalContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick() {
    navigate("/");
    dispatch(removeAllItems());
    dispatch(handleCheckOut());
  }

  return (
    <div className={styles.container}>
      <ModalHeader />
      <ModalSummary />
      <Button
        text="back to home"
        type="dense"
        functionHandler={() => handleClick()}
      />
    </div>
  );
}

export default ModalContainer;
