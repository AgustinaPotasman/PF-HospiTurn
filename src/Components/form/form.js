import React, { useState } from 'react';
import Boton from '../Boton/Boton';
import './form.css';

function Form({crearTurno}) {
  
  const [especialidad, setEspecialidad] = useState();
  const [sintomas, setSintomas] = useState();

  const formulario = (event) => {
    const nuevoTurno = { especialidad, sintomas };
    crearTurno(nuevoTurno); 
  };
    return (
        <form onSubmit={formulario}>
            <div className="mb-3">
                <select id="especialidad" className="form-select" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)}>
                    <option value="">Seleccione una especialidad</option>
                    <option value="Pediatria">Pediatria</option>
                    <option value="Ginecología">Ginecología</option>
                    <option value="Neonatología">Neonatología</option>
                    <option value="Cardiología">Cardiología</option>
                    <option value="Otorrinolaringología">Otorrinolaringología</option>
                    <option value="Cirugía">Cirugía</option>
                    <option value="Psiquiatria">Psiquiatria</option>
                </select>
            <div className="mb-3">
                <label htmlFor="sintomas" className="form-label">Ingrese sus sintomas</label>
                <textarea id="sintomas" className="form-control" value={sintomas} onChange={(e) => setSintomas(e.target.value)} />
            </div>
            </div>
                <Boton sendText={"Siguiente"} />
        </form>
       
    );
}

export default Form;

