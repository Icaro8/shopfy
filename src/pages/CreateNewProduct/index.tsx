import React from "react";
import { useForm } from "react-hook-form";

import { Hader } from "../../components/Header";
import "./styles.scss";
export const CreateNewProduct: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};

  return (
    <div className="containerNewProduct">
      <Hader />
      <div className="ContainerFormProduct">
        <h2>Adicionar novo produto</h2>
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="column">
              <label htmlFor="name">Nome do Produto</label>
              <input type="text" {...register("name")} id="name" />
            </div>
            <div className="column">
              <label htmlFor="full_name">Nome completo do Produto</label>
              <input type="text" {...register("full_name")} id="full_name" />
            </div>
            <div className="column">
              <label htmlFor="img_url">URL da Imagem</label>
              <input type="text" {...register("img_url")} id="img_url" />
            </div>
            <div className="column">
              <label htmlFor="amount">Valor do Produto</label>
              <input type="number" {...register("amount")} id="amount" />
            </div>
            <div className="column">
              <label htmlFor="description">Descrição</label>
              <textarea
                {...register("description")}
                id="description"
                cols={30}
                rows={10}
              ></textarea>
            </div>
            <button type="submit" className="register">
              Cadastrar
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};
