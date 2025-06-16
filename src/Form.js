import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Bienvenido, ${usuario}`);
  };

  return (
    <div className="form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>

        <label htmlFor="usuario">Usuario</label>
        <input
          type="text"
          id="usuario"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
          placeholder="Ingrese su usuario"
          required
        />

        <label htmlFor="clave">Contraseña</label>
        <input
          type="password"
          id="clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          placeholder="Ingrese su contraseña"
          required
        />

        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
};

export default Form;
