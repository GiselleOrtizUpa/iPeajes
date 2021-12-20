import React from "react";
const Buttons= () => {
    return(
        <div class="row mb-3 d-flex justify-content-center">
            <div class="btn-group btn-group-justified">
                <button type="submit" class="btn btn-success btn-lg">Agregar</button>
                <button type="submit" class="btn btn-warning btn-lg">Editar</button>
                <button type="submit" class="btn btn-danger btn-lg">Eliminar</button>
                <input type="reset" value="Limpiar formulario" class="btn btn-dark"></input>
            </div>
        </div>
    );
}
export default Buttons;