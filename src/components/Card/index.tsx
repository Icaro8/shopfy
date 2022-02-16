import React from "react";
import { ProductsProps } from "../../interfaces/products.interface";
import { PriceFormat } from "../../utils/amountFormat";
import "./styles.scss";
export const Card: React.FC<Partial<ProductsProps>> = ({
  ammount,
  brand,
  full_name,
  image,
  name,
}) => {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={image} alt={name} />
      </div>
      <div>
        <h3>{full_name}</h3>
      </div>
      <div>
        <strong>Marca:{brand}</strong>
      </div>
      <div>
        <strong>Valor:{PriceFormat(ammount!)}</strong>
      </div>
    </div>
  );
};
