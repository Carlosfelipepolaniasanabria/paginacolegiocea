import React from "react";
import "./programas.css";

const Programas = () => {
  return (
    <div className="programas-container">
      <h2>Programas Ofrecidos</h2>
      <p>
        Nuestro colegio ofrece una educación integral basada en principios cristianos,
        formando estudiantes en diversas áreas del conocimiento. Estos son algunos de los programas que ofrecemos:
      </p>

      <ul className="lista-programas">
        <li>Educación Preescolar</li>
        <li>Educación Primaria</li>
        <li>Educación Secundaria</li>
        <li>Formación en Valores Cristianos</li>
        <li>Enseñanza del Inglés como segunda lengua</li>
        <li>Programa de Música y Artes</li>
        <li>Educación Física y Deportes</li>
        <li>Talleres de Ciencia y Tecnología</li>
      </ul>
    </div>
  );
};

export default Programas;
