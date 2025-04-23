
import React, { useState } from "react";
import "./styles/ReunionSection.css";
import { useNavigate } from 'react-router-dom';

export default function ReunionSection() {
  const navigate = useNavigate();
  const [selectedHour, setSelectedHour] = useState("10");
  const [selectedMinute, setSelectedMinute] = useState("00");
  const [selectedAMPM, setSelectedAMPM] = useState("AM");
  const [selectedTimezone, setSelectedTimezone] = useState(
    "UTC -04:00 Hora del Caribe Oriental"
  );
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);
  const timezoneOptions = [
    "UTC -12:00 Baker Island, Howland Island",
    "UTC -11:00 Niue, Samoa Americana",
    "UTC -10:00 Hawái-Aleutiano Standard Time, Cook Islands, Tahiti",
    "UTC -09:30 Marquesas Islands",
    "UTC -09:00 Alaska Standard Time, Gambier Islands",
    "UTC -08:00 Pacific Standard Time, Pitcairn Islands",
    "UTC -07:00 Mountain Standard Time",
    "UTC -06:00 Central Standard Time, Easter Island",
    "UTC -05:00 Eastern Standard Time, Colombia, Cuba, Ecuador, Perú",
    "UTC -04:30 Venezuela Standard Time",
    "UTC -04:00 Atlantic Standard Time, Bolivia, Brasil, Chile, Paraguay",
    "UTC -03:30 Newfoundland Standard Time",
  ];

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
  };

  const handleMinuteChange = (event) => {
    setSelectedMinute(event.target.value);
  };

  const handleAMPMChange = (ampm) => {
    setSelectedAMPM(ampm);
  };
  const toggleTimezoneDropdown = () => {
    setIsTimezoneOpen(!isTimezoneOpen);
  };
  const selectTimezone = (timezone) => {
    setSelectedTimezone(timezone);
    setIsTimezoneOpen(false);
  };
  const handleNextButtonClick = () => {
    navigate('/meet'); 
  };
  const handleBackButtonClick = () => {
    navigate('/free-trial'); 
  };
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
      <div className="right-reunion-section">
        <div className="scheduling-container">
          <div className="scheduling-header">
            <p>Duración de la reunión</p>
            <p>30 minutos</p>
          </div>
          <div className="scheduling-question">
            <p>¿A qué hora puedes?</p>
            <p>Mostrando los horarios para el 28 de noviembre de 2024</p>
          </div>
          
          <div
            className={`timezone-selector ${isTimezoneOpen ? "open" : ""}`}
            onClick={toggleTimezoneDropdown}
          >
            <p>{selectedTimezone}</p>
            <div className="dropdown-arrow">&#9660;</div>
            {isTimezoneOpen && (
              <ul className="timezone-dropdown">
                {timezoneOptions.map((timezone) => (
                  <li
                    key={timezone}
                    onClick={() => selectTimezone(timezone)}
                  >
                    {timezone}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="time-input">
            <label htmlFor="hour">Enter time</label>
            <div className="time-select">
              <input
                type="number"
                id="hour"
                value={selectedHour}
                onChange={handleHourChange}
                min="1"
                max="12"
              />
              <span className="separator">:</span>
              <input
                type="number"
                id="minute"
                value={selectedMinute}
                onChange={handleMinuteChange}
                min="00"
                max="59"
                step="1"
              />
              <div className="ampm-buttons">
                <button
                  className={selectedAMPM === "AM" ? "active" : ""}
                  onClick={() => handleAMPMChange("AM")}
                >
                  AM
                </button>
                <button
                  className={selectedAMPM === "PM" ? "active" : ""}
                  onClick={() => handleAMPMChange("PM")}
                >
                  PM
                </button>
              </div>
            </div>
            <div className="time-labels">
              <span>Hour</span>
              <span>Minute</span>
             
            </div>
          </div>
          <div className="scheduling-buttons">
            <button className="back-button" onClick={handleBackButtonClick}>Atrás</button>
            <button className="next-button" onClick={handleNextButtonClick}>Siguiente</button>
            
          </div>
        </div>
      </div>
      <div className="calendar-image">
        <img src="/disegner_13.png" alt="foto" />
      </div>
    </div>
  );
}
