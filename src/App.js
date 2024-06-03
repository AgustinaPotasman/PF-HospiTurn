import React, { useState } from 'react';
import './App.css';
import Titulo from './Components/Titulo.js  ';
import Form from './Components/Form';

function App() {
    let respuesta;
    const [turno, setTurno] = useState(null);
    const crearTurno = (nuevoTurno) => {
        setTurno(nuevoTurno);
        nuevoTurno.preventDefault(); //segun lo que entendi, esto va a evitar que se repitan "nuevosturnos",, pero a chequear
        console.log("Turno creado");
      };

    return (
      <div className="App">
        <header className="App-header">
          <Titulo titulo="Informacion" />
          <div class="mainData">
          <form crearTurno={crearTurno} />
          </div>
        </header>
        {turno && (
            <div>
                <p>Turno reservado:</p>
                <p>Especialidad: {turno.especialidad}</p>
                <p>Síntomas: {turno.sintomas}</p>
            </div>
        )}

/* {mostrarAlerta && (
          <Alerta
              onAceptar={handleAceptar}
              onRechazar={handleRechazar}/>
      )}

*/ 
      </div>
    );
}
export default App;


