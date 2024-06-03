import './alerta.css';

function alerta({especialidad, sintomas}) {

    return (
       <form>
            <input type="submit" name="action" value="Aceptar" />
            <input type="submit" name="action" value="Cancelar" />
            
       </form>
    );
}

export default alerta;