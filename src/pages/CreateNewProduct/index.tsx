import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Header } from "../../components/Header";
import { newProduct } from "../../validation/newProduct.yup";
import { ProductsProps } from "../../interfaces/products.interface";
import "./styles.scss";
import { api } from "../../utils/axios.config";
import { toast } from "react-toastify";

export const CreateNewProduct: React.FC = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit: SubmitHandler<Partial<ProductsProps>> = (data) => {
    newProduct.isValid(data).then(async (response) => {
      if (response) {
        const status = await api.post("/items", data);
        reset();
        if (status.status === 201)
          toast.success("Produto cadastrado", {
            draggable: true,
            theme: "light",
          });
      }
    });
  };

  return (
    <div className="containerNewProduct">
      <Header />
      <div className="ContainerFormProduct">
        <h2>Adicionar novo produto</h2>
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="column">
              <label htmlFor="name">Marca do Produto</label>
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
