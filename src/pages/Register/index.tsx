import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuid } from "uuid";
import { newUser } from "../../validation/userRegister.yup";
import { User } from "../../interfaces/user.interface";
import { api } from "../../utils/axios.config";
import { toast } from "react-toastify";
import { FaShopify } from "react-icons/fa";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<User>();

  useEffect(() => {
    document.title = "Login";
    // toast("Holá 🥰", {
    //   theme: "light",
    //   draggable: true,
    // });
  }, []);
  const onSubmit: SubmitHandler<User> = (data) => {
    const CreateUser = {
      ...data,
      id: uuid(),
    };
    newUser
      .isValid(CreateUser)
      .then((response) => {
        if (response)
          api
            .post("/users", CreateUser)
            .then((response) => {
              localStorage.setItem("user.crud", response?.data.name);
              const name = response?.data.name;
              toast.success(`Seja bem vindo ${name}`, {
                draggable: true,
              });
              navigate("/home");
            })
            .catch((error) =>
              toast.error(
                `Inflezmente tivemos um erro desculpe ${CreateUser.name}`
              )
            );
      })
      .catch((error) => toast.error("Desculpe todos os campos são requeridos"));
  };
  return (
    <div className="container">
      <div className="container-svg">
        <FaShopify />
        <h1>Shoop Fyy</h1>
        <strong>Cadastro</strong>
      </div>
      <div className="form-container">
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="column">
              <label htmlFor="name">Digite seu nome</label>
              <input type="text" {...register("name")} id="name" />
            </div>
            <div className="column">
              <label htmlFor="email">Digite seu email</label>
              <input type="email" {...register("email")} id="email" />
            </div>
            <div className="column">
              <label htmlFor="password">Digite o password</label>
              <input type="passsword" {...register("password")} id="password" />
            </div>
            <div className="btn-container">
              <button type="submit">Criar usuario</button>
              <button className="account" onClick={() => navigate("/")}>
                Já Possui conta?
              </button>
            </div>
          </form>
        </main>
      </div>
    </div>
  );
};
