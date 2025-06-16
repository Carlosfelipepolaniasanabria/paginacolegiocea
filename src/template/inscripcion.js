import React, { useState } from "react";
import "./inscripcion.css";

const Inscripcion = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    identificacion: "",
    correo: "",
    telefono: "",
    grado: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formulario);
    alert("Formulario enviado correctamente.");
    setFormulario({nombre: "", apellido: "", identificacion: "", correo: "", telefono: "", grado: "",});
  };

  return (
    <div className="registro-container">
      <h2>Formulario de Inscripción</h2>
      <form onSubmit={handleSubmit} className="registro-form">
        <input type="text" name="nombre" placeholder="Nombre" value={formulario.nombre} onChange={handleChange} required/>
        <input type="text" name="apellido" placeholder="Apellido" value={formulario.apellido} onChange={handleChange} required/>
        <input type="text" name="identificacion" placeholder="Número de Identificación" value={formulario.identificacion} onChange={handleChange} required/>
        <input type="email" name="correo" placeholder="Correo Electrónico" value={formulario.correo} onChange={handleChange}required/>
        <input type="tel" name="telefono" placeholder="Teléfono"  value={formulario.telefono} onChange={handleChange} required/>
        
        <select name="grado" value={formulario.grado}onChange={handleChange}required>
          <option value="">Selecciona un grado</option>
          <option value="Preescolar">Preescolar</option>
          <option value="Primaria">Primaria</option>
          <option value="Secundaria">Secundaria</option>
        </select>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Inscripcion;
