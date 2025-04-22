import React from "react";
import "./styles/ServicesSection.css";

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Columna izquierda */}
        <div className="image-column">
          <div className="black-bg">
            <img src="/designer_12.png" alt="Service" />
          </div>
        </div>

        {/* Columna derecha */}
        <div className="services-right">
          <h2>Todos los servicios creativos que necesites en un solo lugar</h2>
          <p>
            Explora más de 100 servicios de diseño disponibles con nuestra
            suscripción.
          </p>

          <div className="services-list">
            <div className="services-card">
              <div className="img-wrapper">
                <img src="/diseno-marca.png" alt="service" />
              </div>
              <div className="service-text">
                <h3>Diseño de marca</h3>
                <p>Manuales de marca, logotipos y key visuals.</p>
              </div>
            </div>
            <div className="services-card">
              <div className="img-wrapper">
                <img src="/designer_12.png" alt="service" />
              </div>
              <div className="service-text">
                <h3>Social Media</h3>
                <p>Anuncios para redes sociales y ads para Meta o Google.</p>
              </div>
            </div>

            <div className="services-card">
              <div className="img-wrapper">
                <img src="/designer_12.png" alt="service" />
              </div>
              <div className="service-text">
                <h3>Diseño web</h3>
                <p>
                  Landings, sitios webs completos y plantillas de email
                  marketing.
                </p>
              </div>
            </div>

            <div className="services-card">
              <div className="img-wrapper">
                <img src="/designer_12.png" alt="service" />
              </div>
              <div className="service-text">
                <h3>Edicion de video</h3>
                <p>
                  Tutoriales, demos de productos, podcast o videos informativos.
                </p>
              </div>
            </div>

            <div className="services-card">
              <div className="img-wrapper">
                <img src="/designer_12.png" alt="service" />
              </div>
              <div className="service-text">
                <h3>Presentaciones</h3>
                <p>Infografías, decks, ebooks y presentaciones comerciales</p>
              </div>
            </div>

            <div className="services-card">
              <div className="img-wrapper">
                <img src="/designer_12.png" alt="service" />
              </div>
              <div className="service-text">
                <h3>Diseño de productos</h3>
                <p>
                  Dashboards, aplicaciones web o móvil e interfaces digitales.
                </p>
              </div>
            </div>

            <div className="services-card">
              <div className="img-wrapper">
                <img src="/designer_12.png" alt="service" />
              </div>
              <div className="service-text">
                <h3>Animacion 2D y 3D</h3>
                <p>Motion graphics, demos de producto y animación 2D/3D</p>
              </div>
            </div>

            <div className="services-card">
              <div className="img-wrapper">
                <img src="/designer_12.png" alt="service" />
              </div>
              <div className="service-text">
                <h3>Ilustracion</h3>
                <p>
                  Assets digitales, iconos, personajes y material ilustrado.
                </p>
              </div>
            </div>

            <div className="services-card">
              <div className="img-wrapper">
              </div>
              <div className="service-text">
                <h3>+100</h3>
                <p>Servicios de diseño</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
