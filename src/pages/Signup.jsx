import React from "react";
import { signUp } from "../services/AuthServices";
import { useContext, useState } from "react";
import { AdminContext } from "../components/contexts/AdminContext";

const Signup = () => {
  const [registerState, setRegisterState] = useState({
    isLoading: false,
    isError: false,
    errorMessage: "",
    successMessage: "",
  });
  const [newUser, setNewUser] = useState({
    userEmail: "",
    userPassword: "",
    userPassword2: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    setNewUser({
      ...newUser,
      [name]: value,
    });
  };

  const createUser = async (e) => {
    e.preventDefault();
    setRegisterState({
      ...registerState,
      isLoading: true,
    });
    try {
      const response = await signUp(newUser);
      if (response.success) {
        return setRegisterState({
          ...registerState,
          isAuthenticated: true,
          isLoading: false,
        });
      }
      return setRegisterState({
        ...registerState,
        isError: true,
        errorMessage: response.message,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      return setRegisterState({
        ...registerState,
        isError: true,
        errorMessage: "No se pudo establecer conexión con el servidor",
        isLoading: false,
      });
    }
  };

  return (
    <div className="flex flex-grow items-center">
      <form className="mx-auto mt-8 w-full max-w-sm" onSubmit={createUser}>
        <h1 className="mx-auto mb-8 w-full rounded-3xl bg-pokeblack py-4 text-center text-2xl font-bold text-pokeyellow">
          Crea una cuenta
        </h1>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-pokewhite md:mb-0 md:text-right"
              htmlFor="usuario"
            >
              Nombre de Usuario
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded-2xl border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-pokered focus:bg-white focus:outline-none"
              id="usuario"
              type="text"
              placeholder="Ej. AshMostaza"
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-pokewhite md:mb-0 md:text-right"
              htmlFor="useremail"
            >
              Email
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded-2xl border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-pokered focus:bg-white focus:outline-none"
              id="useremail"
              type="text"
              placeholder="mail@ejemplo.com"
              name="userEmail" // Agregar este atributo
              value={newUser.userEmail}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-pokewhite md:mb-0 md:text-right"
              htmlFor="password"
            >
              Contraseña
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded-2xl border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-pokered focus:bg-white focus:outline-none"
              id="password"
              type="password"
              placeholder="**************"
              name="userPassword"
              value={newUser.userPassword}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="focus:shadow-outline w-full rounded-2xl bg-black py-2 px-4 font-bold text-white shadow hover:border-2 hover:border-black hover:bg-pokered focus:outline-none"
              type="submit"
            >
              Registrarme
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
