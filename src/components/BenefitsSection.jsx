import React from "react";
import "./styles/BenefitsSection.css";

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <h2 className="benefits-title">Beneficios de usar Design Win</h2>

      <div className="benefits-wrapper">
        {/* Contenedor de las tarjetas (lado izquierdo) */}
        <div className="benefits-grid">
          <div className="benefit-card">
            <img src="/designer_12.png" alt="Benefit 1" />
            <div className="benefit-text">
              <h3>Diseño de ultra alta calidad</h3>
              <p>
                Contratamos a los mejores diseñadores para trabajar en tus
                proyectos.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <img src="/designer_12.png" alt="Benefit 2" />
            <div className="benefit-text">
              <h3>Entregas ultrarápidas</h3>
              <p>
                Recibe tus diseños con la máxima rapidez, sin sacrificar
                calidad.
              </p>
            </div>
          </div>

          <div className="benefit-card">
            <img src="/designer_12.png" alt="Benefit 3" />
            <div className="benefit-text">
            <h3>Revisiones ilimitadas</h3>
            <p>
              ¿Cambios en el proyecto? ¡No hay problema! Seguiremos trabajando
              hasta que estés 100% satisfecho.
            </p>
            </div>
          </div>

          <div className="benefit-card">
            <img src="/designer_12.png" alt="Benefit 4" />
            <div className="benefit-text">
            <h3>Todo en una misma aplicación</h3>
            <p>
              Comparte feedback, recibe archivos, y mantén tu flujo creativo
              centralizado.
            </p>
            </div>
          </div>
        </div>

        <div className="benefits-cta">
          <h3>¡Desbloquea tu operación de diseño ahora!</h3>
          <p>
            Descubre cómo Design Win puede integrarse perfectamente a tu flujo
            de trabajo, agilizando cada etapa.
          </p>
          <button className="btn-cta">Planes</button>
        </div>
      </div>
    </section>
  );
}
