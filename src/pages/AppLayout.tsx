import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import Cart from "../cart/Cart";
import { useEffect } from "react";

function AppLayout() {
  const isVisible = useSelector((state: RootState) => state.cart.isVisible);

  useEffect(() => {
    if (isVisible) {
      document.querySelector("body")!.style.overflow = "hidden";
    }

    return () => (document.querySelector("body")!.style.overflow = "");
  }, [isVisible]);

  return (
    <>
      <Header />
      <Outlet />
      {isVisible && <Cart />}
      <Footer />
    </>
  );
}

export default AppLayout;
