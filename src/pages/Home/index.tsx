import React, { useEffect, useState } from "react";
import { api } from "../../utils/axios.config";
import { ProductsProps } from "../../interfaces/products.interface";

import "./styles.scss";
import { Card } from "../../components/Card";
import { Hader } from "../../components/Header";

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
      <Hader />
      <div>
        {products?.map((element) => (
          <Card
            key={element.id}
            ammount={element.ammount}
            image={element.image}
            full_name={element.full_name}
            brand={element.brand}
          />
        ))}
      </div>
    </div>
  );
};
