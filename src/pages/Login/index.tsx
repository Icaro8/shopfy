import React, { useRef, useEffect } from "react";
import { FaShopify } from "react-icons/fa";
import { useForm, SubmitHandler } from "react-hook-form";
import { User } from "../../interfaces/user.interface";
import { useNavigate } from "react-router-dom";
import "./styles.scss";
import { LoginSchema } from "../../validation/login.yup";

type loginUser = Pick<User, "email" | "password">;
export const Login: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const onSubmit: SubmitHandler<Partial<loginUser>> = (data) => {
    LoginSchema.isValid(data).then((response) => console.log(response));
    console.log(data);
  };
  return (
    <div className="container-login">
      <div className="container-title-login">
        <FaShopify />
        <h1>Shoop Fy</h1>
      </div>
      <div className="container-form-login">
        <main>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="column">
              <label htmlFor="email">Digite seu email</label>
              <input
                type="email"
                {...register("email")}
                id="email"
                ref={inputRef}
              />
            </div>
            <div className="column">
              <label htmlFor="password">Digite sua senha</label>
              <input type="password" {...register("password")} id="password" />
            </div>
            <div className="container-btn-login">
              <button type="submit">Logar</button>
              <button
                className="register"
                onClick={() => navigate("/register")}
              >
                Não possui conta?
              </button>
            </div>
          </form>
        </main>
      </div>
      <button className="btn-navigation" onClick={() => navigate("/home")}>
        Continuar sem conta
      </button>
    </div>
  );
};
