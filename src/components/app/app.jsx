import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductPage from "../../pages/ProductPage";
import { products } from "../../mocks/mock";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductPage product={products[0]} showInfoInAccordion />}
        />
      </Routes>
    </BrowserRouter>
  )

}