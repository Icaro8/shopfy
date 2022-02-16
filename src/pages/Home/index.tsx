import React, { useEffect, useState } from "react";
import { api } from "../../utils/axios.config";
import { PriceFormat } from "../../utils/amountFormat";
interface ProductsProps {
  id: string;
  name: string;
  full_name: string;
  brand: string;
  ammount: number;
  image: string;
}

import "./styles.scss";

export const Home: React.FC = () => {
  const [products, setProducts] = useState<ProductsProps[] | null>(null);

  useEffect(() => {
    async function getProdutcts() {
      const { data } = await api.get("/items");
      setProducts(data);
    }
    getProdutcts();
  }, []);

  return (
    <div>
      <div>
        {products?.map((element) => (
          <div key={element.id}>
            <p>{element.name}</p>
            <p>{element.full_name}</p>
            <img src={element.image} alt={element.name} />
            <strong>{PriceFormat(element.ammount)}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};
