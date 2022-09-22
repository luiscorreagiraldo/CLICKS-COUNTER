import React from "react";

function Boton({text, esBotonDeClick, manejarClick}){
    return(
        <button
        className={ esBotonDeClick ? 'boton-click' : 'boton-reiniciar' }
        onClick={manejarClick}  >
          {text}</button>
    );
}

export default Boton;