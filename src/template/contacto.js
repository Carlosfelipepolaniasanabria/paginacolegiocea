import React, { useState } from "react";
import "./contacto.css";

const Contacto = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensaje enviado:", formulario);
    alert("Gracias por contactarnos. Te responderemos pronto.");
    setFormulario({
      nombre: "",
      correo: "",
      mensaje: "",
    });
  };

  return (
    <div className="contacto-container">
      <h2>Contáctanos</h2>
      <p>¿Tienes alguna duda? Escríbenos y te responderemos lo antes posible.</p>

      <form onSubmit={handleSubmit} className="contacto-form">
        <input type="text" name="nombre" placeholder="Tu nombre" value={formulario.nombre} onChange={handleChange} required />
        <input type="email" name="correo" placeholder="Tu correo electrónico" value={formulario.correo} onChange={handleChange} required />
        <textarea name="mensaje" placeholder="Escribe tu mensaje aquí..."rows="5"value={formulario.mensaje} onChange={handleChange} required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </div>
  );
};

export default Contacto;
