import React from "react";
import "./styles/Chatbot.css"; 

const Chatbot = React.forwardRef(({ onClose }, ref) => { 
  return (
    <div className="chatbot-container" ref={ref}>
      <div className="chatbot-header">
        Chat con nosotros
        <button onClick={onClose}>Cerrar</button>
      </div>
      <div className="chatbot-body">
        <p>¡Hola! ¿En qué puedo ayudarte hoy?</p>
      </div>
      <div className="chatbot-footer">
        <input type="text" placeholder="Escribe tu mensaje..." />
        <button>Enviar</button>
      </div>
    </div>
  );
});

export default Chatbot;