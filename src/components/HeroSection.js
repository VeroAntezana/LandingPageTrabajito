import React from "react";
import { useNavigate } from 'react-router-dom';
import "./styles/HeroSection.css";

export default function HeroSection() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/free-trial');
    };
  return (
    <section className="hero-section">
      {/* Fila superior */}
      <div className="hero-top">
        <div className="hero-content">
          <div className="hero-categories">
            Diseño gráfico | Diseño Web | Diseño UI | Edición de video
          </div>
          <h1>Un pago y miles de diseños para ti</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="button-and-trial-info">
            <button className="btn-primary" onClick={handleClick}>Start free trial</button>
            <p className="trial-info">Agenda una reunión y obtén 7 días gratis</p>
          </div>
        </div>

        <div className="hero-image">
          <img src="/designer.png" alt="laptop" />
        </div>
      </div>

      {/* Fila inferior, solo para los logos */}
      <div className="hero-bottom">
        <img src="/Group.png" alt="Empresas partners" />
      </div>
    </section>
  );
}
