import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";
import { Header } from "../../components/Header";
import { api } from "../../utils/axios.config";
import { ProductsProps } from "../../interfaces/products.interface";
import { useForm, SubmitHandler } from "react-hook-form";
import { newProduct } from "../../validation/newProduct.yup";
import { RiDiscFill } from "react-icons/ri";
import { toast } from "react-toastify";

export const DeleteProduct: React.FC = () => {
  const [product, setProduct] = useState<ProductsProps | null>(null);
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  console.log(product);
  useEffect(() => {
    async function getProduct() {
      const { data } = await api.get(`/items/${id}`);
      reset(data);
      setProduct(data);
    }
    getProduct();
  }, []);

  const onSubmit: SubmitHandler<Partial<ProductsProps>> = (data) => {
    console.log(data);
    newProduct.isValid(data).then(async (response) => {
      if (response) {
        const responseServer = await api.put(`/items/${id}`, data);
        if (responseServer.status === 200)
          toast.success(`Produto Editado com sucesso ⚓ `, {
            draggable: true,
          });
      }
    });
  };

  return (
    <div>
      <Header />
      <div className="flexColumn">
        <div className="title">
          <h1>Editar Produto</h1>
        </div>
        <main className="containerForm">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="column">
              <label htmlFor="full_name">Novo nome do Produto</label>
              <input type="text" {...register("full_name")} id="full_name" />
            </div>
            <div className="column">
              <label htmlFor="name">Marca</label>
              <input type="text" {...register("name")} id="name" />
            </div>
            <div className="column">
              <label htmlFor="amount">Valor</label>
              <input type="number" {...register("amount")} id="amount" />
            </div>
            <div className="column">
              <label htmlFor="img_url">URL da imagen</label>
              <input type="text" {...register("img_url")} id="img_url" />
            </div>
            <div className="column">
              <label htmlFor="description">Descrição</label>
              <textarea
                cols={30}
                rows={10}
                {...register("description")}
                id="description"
              ></textarea>
            </div>
            <button type="submit">Editar</button>
          </form>
        </main>
      </div>
    </div>
  );
};
