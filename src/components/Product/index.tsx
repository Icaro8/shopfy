import React from "react";
import { ProductsProps } from "../../interfaces/products.interface";
import "./styles.scss";
import { PriceFormat } from "../../utils/amountFormat";
export const ProductCard: React.FC<Partial<ProductsProps>> = ({
  amount,
  description,
  img_url,
  full_name,
  name,
}) => {
  return (
    <div className="containerProduct">
      <div>
        <h2>{full_name}</h2>
      </div>
      <div className="containerContent">
        <div className="containerImage">
          <img src={img_url} alt={name} />
        </div>
        <div className="containerDescription">
          <div>
            <h2>{full_name}</h2>
          </div>
          <div>
            <p>{description}</p>
          </div>
          <div>
            <strong>{PriceFormat(amount!)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
};
