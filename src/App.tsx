import { Route, Routes } from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import ProductPage from "./pages/productpage/ProductPage";
import Homepage from "./pages/homepage/Homepage";
import ProductDetail from "./pages/productdetail/ProductDetail";
import CheckoutPage from "./pages/checkout/CheckoutPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Homepage />} />
        <Route path="product/:productCategory" element={<ProductPage />} />
        <Route
          path="product/:productCategory/:slug"
          element={<ProductDetail />}
        />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
