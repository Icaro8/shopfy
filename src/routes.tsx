import { Routes, Route } from "react-router-dom";

import { LoginPage } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";
import { CreateNewProduct } from "./pages/CreateNewProduct";
import { ViewProduct } from "./pages/Product";
import { DeleteProduct } from "./pages/EditProduct";

export const RoutesApplication: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/newproduct" element={<CreateNewProduct />} />
      <Route path="/:id" element={<ViewProduct />} />
      <Route path="/edit/:id" element={<DeleteProduct />} />
    </Routes>
  );
};
