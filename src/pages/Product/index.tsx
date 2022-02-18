import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../../utils/axios.config";
import { ProductsProps } from "../../interfaces/products.interface";
import { ProductCard } from "../../components/Product";
import { Header } from "../../components/Header";
import { toast } from "react-toastify";

export const ViewProduct: React.FC = () => {
  const [product, setProduct] = useState<ProductsProps | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    async function searchProduct() {
      const { data } = await api.get(`/items/${id}`);
      setProduct(data);
    }
    searchProduct();
  }, []);
  async function handleExcludeItem(item: string | undefined) {
    const response = await api.delete(`/items/${item}`);
    if (response.status === 200) {
      toast.success("Produto apagado com sucesso 🤑");
      navigate("/home");
    }
  }
  return (
    <div>
      <Header />
      <ProductCard
        amount={product?.amount}
        full_name={product?.full_name}
        img_url={product?.img_url}
        description={product?.description}
        name={product?.name}
        onClick={() => handleExcludeItem(product?.id)}
        handleNavigation={() => navigate(`/edit/${product?.id}`)}
      />
    </div>
  );
};
