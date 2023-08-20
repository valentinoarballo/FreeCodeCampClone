import React from "react";
import "../stylesSheets/testimonio.css";

function Testimonio (props) {
    return (
        <div className="contenedor">
            <img 
                className="imagen"
                src={require(`../images/FreeCodeCamp-${props.imagen}.png`)}
                alt="Foto de estudiante"/>
            <div className="contenedorTexto">

                <p className="nombre">
                    <strong>{props.nombre}</strong> in {props.pais}
                </p>

                <p className="cargo">
                    {props.cargo} at <strong>{props.empresa}</strong>
                </p>

                <p className="testimonio">
                    "{props.testimonio}"
                </p>

            </div>
        </div>
    );
}
export default Testimonio;