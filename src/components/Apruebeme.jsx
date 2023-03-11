import React, { Component } from "react";

class MiComponente extends Component {
  componentDidMount() {
    fetch("http://127.0.0.1:5000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        usuario: "waldir",
        correo: "stringggfg@gmail.com",
        contrasena: "123456",
        rol_id: 2,
      }),
    })
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  }

  render() {
    return <div>Mi Componente</div>;
  }
}

export default MiComponente;
