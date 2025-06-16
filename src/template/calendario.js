import React from "react";
import "./calendario.css";

const Calendario = () => {
  const eventos = [
    { fecha: "2025-01-22", evento: "Inicio de clases primer semestre" },
    { fecha: "2025-03-15", evento: "Semana de receso" },
    { fecha: "2025-05-01", evento: "Día del Trabajo - No hay clases" },
    { fecha: "2025-06-10", evento: "Fin de semestre" },
    { fecha: "2025-07-15", evento: "Inicio segundo semestre" },
    { fecha: "2025-10-13", evento: "Día de la Raza - No hay clases" },
    { fecha: "2025-11-30", evento: "Último día del año escolar" },
  ];

  return (
    <div className="calendario-container">
      <h2>Calendario Académico 2025</h2>
      <table className="calendario-tabla">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Evento</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((item, index) => (
            <tr key={index}>
              <td>{item.fecha}</td>
              <td>{item.evento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendario;
