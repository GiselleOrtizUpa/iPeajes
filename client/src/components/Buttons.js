import React from "react";
const Buttons= () => {
    return(
        <div className="row mb-3 d-flex justify-content-center">
            <div className="btn-group btn-group-justified">
                <button type="submit" className="btn btn-success btn-lg">Agregar</button>
                <button type="submit" className="btn btn-warning btn-lg">Editar</button>
                <button type="submit" className="btn btn-danger btn-lg">Eliminar</button>
                <input type="reset" value="Limpiar formulario" className="btn btn-dark"></input>
            </div>
        </div>
    );
}
export default Buttons;