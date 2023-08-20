import React from "react";
import "../stylesSheets/testimonio.css";

function Testimonio (props) {
    return (
        <div className="contenedor">
            <img 
                className="imagen"
                src={require("../images/FreeCodeCamp1.png")}
                alt="Foto de estudiante"/>
            <div className="contenedorTexto">
                <p className="nombre"> {props.nombre} in {props.pais}</p>
                <p className="cargo">{props.cargo} at {props.empresa}</p>
                <p className="testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );
}
export default Testimonio;