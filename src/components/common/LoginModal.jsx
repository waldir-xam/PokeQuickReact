import ReactModal from "react-modal";
import React, { useState } from "react";

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
      className="LoginModal"
      overlayClassName="LoginModalOverlay"
    >
      <form className="mx-auto mt-4 max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-8 text-2xl font-bold text-gray-800">
          Iniciar sesión
        </h2>
        <div className="mb-4">
          <label className="mb-2 block font-bold text-gray-700" htmlFor="email">
            Correo electrónico
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="email"
            type="email"
            placeholder="ejemplo@correo.com"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block font-bold text-gray-700"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
            onClick={handleSubmit}
          >
            Iniciar sesión
          </button>
          <a
            className="inline-block align-baseline text-sm font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>
    </ReactModal>
  );
};

export default LoginModal;
