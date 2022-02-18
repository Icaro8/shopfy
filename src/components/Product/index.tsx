import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";

import { ProductsProps } from "../../interfaces/products.interface";
import "./styles.scss";
import { PriceFormat } from "../../utils/amountFormat";
import { api } from "../../utils/axios.config";
export const ProductCard: React.FC<Partial<ProductsProps>> = ({
  amount,
  description,
  img_url,
  full_name,
  name,
  onClick,
  handleNavigation,
}) => {
  return (
    <div className="containerProduct">
      <div>
        <h2>{full_name}</h2>
      </div>
      <div className="containerContentProduct">
        <div className="containerImage">
          <img src={img_url} alt={name} />
        </div>
        <div className="containerDescription">
          <div>
            <h3>{full_name}</h3>
          </div>
          <div className="descriptionProductA">
            <p>{description}</p>
          </div>
          <div>
            <strong>Valor: {PriceFormat(amount!)}</strong>
          </div>
          <div className="btnContainer">
            <div className="column">
              <button className="buy">Comprar Agora!</button>
              <button className="removeProduct" onClick={onClick}>
                Apagar Produto <AiFillDelete />
              </button>
            </div>
            <div className="column">
              <button className="addCart">Adicionar ao carrinho</button>
              <button className="editProduct" onClick={handleNavigation}>
                Editar Produto <AiFillEdit />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
