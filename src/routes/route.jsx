import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Brand, Categories, Customer, Dashboard, PrintBarcode, Products, Supplier, Variations } from "../pages/page";  // Assuming the dashboard is in the pages directory
import App from "../App";  // Assuming this is the login page component
import { useLayoutEffect } from "react";
function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home route showing login page */}
        <Route exact path="/" element={<App />} />
        <Route exact path="/admin/dashboard" element={<Dashboard />} />
        <Route exact path="/admin/parties/customers" element={<Customer />} />
        <Route exact path="/admin/parties/suppliers" element={<Supplier />} />
        <Route exact path="/admin/productManager/brand" element={<Brand />} />
        <Route exact path="/admin/productManager/categories" element={<Categories />} />
        <Route exact path="/admin/productManager/printBarcode" element={<PrintBarcode />} />
        <Route exact path="/admin/productManager/products" element={<Products />} />
        <Route exact path="/admin/productManager/variations" element={<Variations />} />


        {/* Redirect for any unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
