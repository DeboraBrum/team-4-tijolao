import React from "react";
import './style.css';

export default function Visor({numeros, resultadoTela}) {
    return(
        <>
          <div className="visor">
            <span>{numeros}</span>
            <span>{resultadoTela}</span>
          </div>
        </>
    )
}
