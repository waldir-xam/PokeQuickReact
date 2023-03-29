import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "../services/AuthServices";
import { AdminContext } from "../components/contexts/AdminContext";

const Login = () => {
  const { authentication, setAuthentication } = useContext(AdminContext);
  const [userCredentials, setUserCredentials] = useState({
    usuario: "",
    contrasena: "",
  });
  
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    setUserCredentials({
      ...userCredentials,
      [name]: value,
    });
  };

  const createUser = async (e) => {
    e.preventDefault();
    const response = await signIn(userCredentials);
    if (response.status === 200) {
      console.log(response);
      localStorage.setItem("token", response.data.access_token);
      setAuthentication({
        ...authentication,
        isAuthenticated: true,
        successMessage: "Usuario logeado exitosamente",
      });
      navigate("/stage2");
    } else {
      setAuthentication({
        ...authentication,
        isAuthenticated: false,
        isError: true,
        errorMessage: "Credenciales incorrectas",
      });
    }
  };

  return (
    <div className="flex flex-grow items-center">
      <form className="mx-auto mt-8 w-full max-w-sm" onSubmit={createUser}>
        <h1 className="mx-auto mb-8 w-full rounded-3xl bg-pokeblack py-4 text-center text-2xl font-bold text-pokeyellow">
          Iniciar Sesion
        </h1>
        {/*    <LoginModal /> */}
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-pokewhite md:mb-0 md:text-right"
              htmlFor="usuario"
            >
              Usuario
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded-2xl border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-pokered focus:bg-white focus:outline-none"
              id="usuario"
              name="usuario"
              type="text"
              placeholder="AshMostaza"
              value={userCredentials.usuario}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-pokewhite md:mb-0 md:text-right"
              htmlFor="contrasena"
            >
              Contraseña
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded-2xl border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-pokered focus:bg-white focus:outline-none"
              id="contrasena"
              name="contrasena"
              type="contrasena"
              placeholder="*************"
              value={userCredentials.contrasena}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="focus:shadow-outline w-full rounded-2xl border-2 border-pokeblack bg-black py-2 px-4 font-bold text-white shadow hover:bg-pokered focus:outline-none"
              type="submit"
              disabled={authentication.isLoading ? true : false}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
