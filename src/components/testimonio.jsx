import React from "react";

function Testimonio () {
    return (
        <div className="contenedor">
            <img 
                className="imagen"
                src={require("../images/FreeCodeCamp1.png")}
                alt="Foto de estudiante"/>
            <div className="contenedorTexto">
                <p className="nombre">mi nombre</p>
                <p className="cargo">mi trabajo</p>
                <p className="tertimonio">blablabla</p>
            </div>
        </div>
    );
}
export default Testimonio;