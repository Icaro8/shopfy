import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../utils/axios.config";
import { ProductsProps } from "../../interfaces/products.interface";
import { ProductCard } from "../../components/Product";
import { Header } from "../../components/Header";
export const ViewProduct: React.FC = () => {
  const [product, setProduct] = useState<ProductsProps | null>(null);
  const { id } = useParams();
  useEffect(() => {
    async function searchProduct() {
      const { data } = await api.get(`/items/${id}`);
      setProduct(data);
    }
    searchProduct();
  }, []);
  return (
    <div>
      <Header />
      <ProductCard
        amount={product?.amount}
        full_name={product?.full_name}
        img_url={product?.img_url}
        description={product?.description}
        name={product?.name}
      />
    </div>
  );
};
