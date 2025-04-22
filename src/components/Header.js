import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles/Header.css";

export default function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/free-trial');
  };
  return (
    <header className="header-container">
      <div className="header-logo">
        <img src="/logo_diseng.png" alt="Logo" />
      </div>
      <nav className="header-nav">
      <ul>
          <li><a href="#services">Servicios</a></li>
          <li><a href="#portfolio">Portafolio</a></li>
          <li><a href="#pricing">Precios</a></li>
          <li><a href="#faq">Preguntas</a></li>
          <li><a href="#faq">Blog</a></li>
          <li><a href="#login">Iniciar sesión</a></li>
        </ul>
        </nav>
      <div className="header-cta">
      <button className="btn-primary" onClick={handleClick}>Start free trial</button>
      </div>
    </header>
  );
}
