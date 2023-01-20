import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Insight from "./pages/Insight";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insight" element={<Insight />} />
      </Routes>
    </div>
  );
}

export default App;

/* <Routes>
        <Route path="/" element={<LoginComp />} />
        <Route path="/users" element={<DataTable />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single-page/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/invoice" element={<Invoice />} />
        <Route path="/orders" element={<OrderData />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */
