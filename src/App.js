import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';

import Form from "./Form";
import Sistema from "./Sistema";
import Programas from "./template/programas";
import Contacto from "./template/contacto";
import Inscripcion from "./template/inscripcion";
import Calendario from "./template/calendario";
import logo from './img/Logocolegioadventista.png';

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center" }}>
        <div className="Encabezado">
          <img src={logo} className="logo" alt="Logo Colegio Adventista" />
          <h1 className="school-name">Corporación educativa adventista</h1>
        </div>

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/Form">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/programas">Programas Ofrecidos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contacto">Contáctanos</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/inscripcion">Formulario de inscripción</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/calendario">Calendario Académico</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="contenido-principal">
          <Routes>
            <Route path="/Form" element={<Form />} />
            <Route path="/programas" element={<Programas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/inscripcion" element={<Inscripcion />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/" element={<Sistema />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

