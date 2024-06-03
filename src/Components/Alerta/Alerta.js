import React from 'react';
import './alerta.css';

let respuesta
function Alerta({ Aceptar, onRechazar }) {
    return (
        <div className="alerta-container">
            <p>¿Seguro que quieres sacar turno?</p>
            <div>
                <button onClick={Aceptar}>Aceptar</button>
                <button onClick={onRechazar}>Rechazar</button>
            </div>
        </div>
    );
}

if (alert== Aceptar){
    respuesta = true
}
else{
    respuesta = false
}

export default respuesta;