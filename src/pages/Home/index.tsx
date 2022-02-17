import React, { useEffect, useState } from "react";
import { api } from "../../utils/axios.config";
import { ProductsProps } from "../../interfaces/products.interface";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Loading } from "../../components/Loading";

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<ProductsProps[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProdutcts() {
      const response = await api.get("/items").then((response) => {
        console.log(response);
        if (response?.data.length > 0) {
          setProducts(response.data);
          setLoading(false);
        }
      });
    }
    getProdutcts();
  }, []);
  function searchProduct(id: string) {
    navigate(`/${id}`);
  }
  return (
    <div>
      <Header />
      <div>
        {!loading ? (
          products?.map((element) => (
            <Card
              key={element.id}
              amount={element.amount}
              img_url={element.img_url}
              full_name={element.full_name}
              name={element.name}
              description={element.description}
              onClick={() => searchProduct(element.id)}
            />
          ))
        ) : (
          <>
            <Loading />
          </>
        )}
      </div>
    </div>
  );
};
