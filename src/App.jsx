import { Route, Routes } from "react-router";
import Layout from "./layout";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import DressStyleSection from "./app/Main/components/Styles";
import CategoryDetails from "./pages/Category/CategoryDetails";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="productDetail/:id" element={<ProductDetail />} />
          <Route index element={<Home />} />
          <Route path="dresStyles" element={<DressStyleSection />} />
          <Route path="categoryDetails" element={<CategoryDetails />} />
        </Route>
      </Routes>

      {/* <TopSellingSection /> */}
    </>
  );
}

export default App
