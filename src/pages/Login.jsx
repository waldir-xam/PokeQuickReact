import React from "react";

const Login = () => {
  return (
    <div className="flex flex-grow items-center">
      <form className="mx-auto mt-8 w-full max-w-sm">
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-1/3">
            <label
              className="mb-1 block pr-4 font-bold text-pokewhite md:mb-0 md:text-right"
              htmlFor="email"
            >
              Usario
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="w-full appearance-none rounded-2xl border-2 border-gray-200 bg-gray-200 py-2 px-4 leading-tight text-gray-700 focus:border-pokered focus:bg-white focus:outline-none"
              id="email"
              type="email"
              placeholder="AshMostaza"
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
              placeholder="*************"
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="focus:shadow-outline rounded-2xl border-2 border-pokeblack bg-black py-2 px-4 font-bold text-white shadow hover:bg-pokered focus:outline-none w-full"
              type="button"
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
