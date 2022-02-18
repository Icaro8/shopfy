import React from "react";
import { ProductsProps } from "../../interfaces/products.interface";
import { PriceFormat } from "../../utils/amountFormat";
import "./styles.scss";
interface CardProp extends ProductsProps {
  onClick: () => void;
}

export const Card: React.FC<Partial<CardProp>> = ({
  amount,
  description,
  full_name,
  name,
  img_url,
  onClick,
}) => {
  return (
    <div className="cardContainer">
      <div className="imgContainer">
        <img src={img_url} alt={name} />
      </div>
      <div>
        <h3>{full_name}</h3>
      </div>
      <div className="containerText">
        <div className="description">
          <p>{description}</p>
        </div>
      </div>
      <div className="value">
        <strong>Valor:{PriceFormat(amount!)}</strong>
      </div>
      <button onClick={onClick} className="product">
        Descrição
      </button>
    </div>
  );
};
