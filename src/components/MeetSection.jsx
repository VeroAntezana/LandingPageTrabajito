import React from "react";
import "./styles/MeetSection.css";
export default function MeetSection() {
  return (
    <div className="free-reunion-container">
      <div className="left-reunion-section">
        <div className="start-reunion">
          <h1>¡Empecemos con tu pedido!</h1>
          <p>
            Agendemos una 30-min call para conocernos, darte la bienvenida y
            ponernos en marcha con un primer pedido.
          </p>
        </div>
        <div className="meeting-info">
          <h2>¿Qué haremos en nuestra primera reunión?</h2>
          <ul>
            <li>
              Una llamada de descubrimiento para conocer más sobre tu marca.
            </li>
            <li>
              Conocer cómo Grayola puede ayudarte a expandir tu equipo de
              diseño.
            </li>
            <li>Activar tu cuenta en Grayola y crear tu primer pedido.</li>
          </ul>
        </div>

        <div className="free-reunion-offer">
          <p>Sin compromisos, ni tarifas ocultas!</p>
          <p>
            ¡La mejor forma de conocernos es probándonos! durante el free trial
            realizaremos por ti tu primer pedido, 100% gratis para ti.
          </p>
        </div>
      </div>

      <div className="right-meet-section">
        <div className="meeting-form-card">
          <h2 className="form-title">Tu información</h2>
          <div className="form-date-edit">
            <span>jueves, 28 de noviembre de 2024 11:00</span>
            <button className="edit-button">Editar</button>
          </div>

          <div className="meet-location">
            <span className="meet-icon">
              <span role="img" aria-label="Icono de marcador de ubicación">
                📍
              </span>
            </span>

            <span className="meet-text">Google Meet</span>
          </div>

          <form className="form-fields">
            <input type="text" placeholder="Nombre" />
            <input type="text" placeholder="Apellidos" />
            <input type="email" placeholder="Dirección de correo" />
            <input type="tel" placeholder="Número de telefono" />
            <textarea placeholder="¿Algo más que deberíamos saber?" rows={3} />
          </form>

          <div className="form-actions">
            <button className="btn-back">Atrás</button>
            <button className="btn-confirm">Confirmar</button>
          </div>
        </div>
      </div>
      <div className="calendar-image">
        <img src="/disegner_13.png" alt="foto" />
      </div>
    </div>
  );
}
