import React, { useState } from "react";
import CodeBug from "./codebug.PNG"
import PiFood from "./food pi.jpg"
function Proyectos(){

    const [hover,setHover]= useState("")

    const proyectos = [


        {
            name:"CodeBug",
            descripcion:"Proyecto realizado con el fin de aprobación final del bootcamp de henry",
            pict:CodeBug,
            funcionalidad:"Sitio web de consultas para iniciantes en la programación",
            tiempo:"3 1/2 semanas",
            link:"https://codebug-ten.vercel.app/"
        },
        {
            name:"Pi-Food",
            descripcion:"Primer proyecto realizado en el bootcamp de Henry",
            pict:PiFood,
            funcionalidad:"Simulación de restaurante virtual",
            tiempo:"2 semanas",
            link:"https://pi-food-versel-v3.vercel.app/"
        }
    ]

    return(
        <div id="proy">
            <span className="titulo proyectos">PROYECTOS</span>
            <div id="prts">
            {proyectos.map((p,i)=>{
                return(
                    <div key={i}>
                        <div className="prt">
                            <a className="prtEl" href={p.link}>visitame</a>
                            <img alt={p.name} onMouseEnter={()=>setHover(p.name)} onMouseLeave={()=>setHover("")} src={p.pict}></img>
                            <h1 className="prtEl">{p.name}</h1>
                        </div>
                        <span className={hover===p.name?"showArrow":"hidden"}>{">"}</span>
                        <div className={hover===p.name?"show":"hidden"}> 
                            <h1 className="showEl">{"Nombre--> "+p.name}:</h1>
                            <h2 className="showEl">{"Qué es?--> "+p.descripcion}</h2>
                            <h2 className="showEl">{"Para qué sirve?--> "+p.funcionalidad}</h2>
                            <h2 className="showEl">{"Duración--> "+ p.tiempo}</h2>
                        </div>
                    </div>
                )
            })}
            </div>
        </div>
    )   
}

export default Proyectos

//ancho letras texto fondo porta intro con cpli https://www.aulaclic.es/guia-office-2013/t_11_4.htm