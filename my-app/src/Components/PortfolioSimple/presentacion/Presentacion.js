import React from "react";
import "./Presentacion.css"

function Presentacion({len}){

    const info ={
        EN:{
            subTitulo:"The Portfolio",
            text:`"A passionate for Programation and logic in all of it´s ambits"`
        },
        ES:{
            subTitulo:"El Portafolio",
            text:`"Un apasionado por la programación y  la lógica en cualquiera de sus ámbitos"`
        }
    }

    return(
        <>
            <span className="titulo">{">PATRICIO COLELLA<"}</span>
            <div className="area" id="pres">
                <span className="subTitulo">{info[len].subTitulo}</span>
                <span className="texto">{info[len].text}</span> 
            </div>
        </>
    )   
}

export default Presentacion