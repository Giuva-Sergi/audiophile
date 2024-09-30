import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cart from "../cart/Cart";
import { useEffect } from "react";
import Modal from "../components/modal/Modal";

function AppLayout() {
  const isVisible = useSelector((state: RootState) => state.cart.isVisible);
  const isCheckedOut = useSelector(
    (state: RootState) => state.cart.isCheckedOut
  );

  useEffect(() => {
    if (isVisible || isCheckedOut) {
      document.querySelector("body")!.style.overflow = "hidden";
    }

    return () => {
      document.querySelector("body")!.style.overflow = "";
    };
  }, [isVisible, isCheckedOut]);

  return (
    <>
      <Header />
      <Outlet />
      {isVisible && <Cart />}
      {isCheckedOut && <Modal />}
      <Footer />
    </>
  );
}

export default AppLayout;
