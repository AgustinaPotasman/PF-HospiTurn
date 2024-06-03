import Boton from '../Boton/Boton';
import './form.css';

function form({especialidad, sintomas}) {
  
    return (
        <form>
            <div class="mb-3">
                <select id="especialidad" class="form-select">
                    <option>Pediatria</option>
                    <option>Ginecología</option>
                    <option>Neonatología</option>
                    <option>Cardiología</option>
                    <option>Otorrinolaringología</option>
                    <option>Cirugía</option>
                    <option>Psiquiatria</option>
            </select>
            <div class="mb-3">
                <label for="sintomas"  class="form-label">Ingrese sus sintomas</label>
            </div>
            </div>
                <Boton sendText={"Siguiente"}></Boton>
        </form>
       
    );
}

export default form;