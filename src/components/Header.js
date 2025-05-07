import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import "./styles/Header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/free-trial');
  };
  return (
    <header className="header-container">
      <div className="header-logo">
      <Link to="/"> {/* Envolvemos el logo con Link y definimos la ruta "/" */}
          <img src="/logo_diseng.png" alt="Logo" />
        </Link>
      </div>
      <nav className="header-nav">
      <ul>
          <li><Link to="/beneficios">Servicios</Link></li>
          <li><a href="/">Portafolio</a></li>
          <li><Link to="/pricing">Precios</Link></li>
          <li><Link to="/preguntas">Preguntas</Link></li>
          <li><a href="#login">Iniciar sesión</a></li>
        </ul>
        </nav>
      <div className="header-cta">
      <button className="btn-primary" onClick={handleClick}>Start free trial</button>
      </div>
    </header>
  );
}
