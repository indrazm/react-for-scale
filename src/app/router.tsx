import { BrowserRouter, Routes, Route } from "react-router";
import { ProductPage } from "../pages/productPage";
import { ProductsPage } from "../pages/productsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
};
