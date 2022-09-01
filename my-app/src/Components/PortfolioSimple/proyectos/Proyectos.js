import React, { useState } from "react";
import CodeBug from "./codebug.PNG"
import PiFood from "./food pi.jpg"
import "./Proyectos.css"
function Proyectos({len}){

    const hoverInit= {
        name:"",
        descripcion:``,
        pict:undefined,
        funcionalidad:"",
        tiempo:"",
        link:"",
        gitHub:""
    }

    const [hover,setHover]= useState(hoverInit)

    const proyects = {
        EN:[
            {
                name:"CodeBug",
                descripcion:`Final Proyect made in group for "Soy Henry"´s bootcamp`,
                pict:CodeBug,
                funcionalidad:"Web-site for doubts of programation begginers",
                tiempo:"3 1/2 weeks",
                link:"https://codebug-ten.vercel.app/",
                gitHub:"https://github.com/Codebug-Henry/Co-debug"
            },
            {
                name:"Pi-Food",
                descripcion:`First proyect made in "Soy Henry"´s bootcamp`,
                pict:PiFood,
                funcionalidad:"Virtual restaurant simulation",
                tiempo:"2 weeks",
                link:"https://pi-food-versel-v3.vercel.app/",
                gitHub:"https://github.com/Patricio-Colella/PI-Food"
            }
        ],
        ES:[
            {
                name:"CodeBug",
                descripcion:`Proyecto final realizado en equipo para el bootcamp "Soy Henry"`,
                pict:CodeBug,
                funcionalidad:"Sitio web de consultas para iniciantes en la programación",
                tiempo:"3 1/2 semanas",
                link:"https://codebug-ten.vercel.app/",
                gitHub:"https://github.com/Codebug-Henry/Co-debug"
            },
            {
                name:"Pi-Food",
                descripcion:`Proyecto individual realizado para el bootcamp "Soy Henry" `,
                pict:PiFood,
                funcionalidad:"Simulación de restaurante virtual",
                tiempo:"2 semanas",
                link:"https://pi-food-versel-v3.vercel.app/",
                gitHub:"https://github.com/Patricio-Colella/PI-Food"
            }
        ]
    }

    const info = {
        EN:{
            tittle:"PROYECTS",
            link:"visit",
            gitHub:"code",
            whatIs:"What is--> ",
            function:"What is it`s function--> ",
            duration:"Duration--> "
        },
        ES:{
            tittle:"PROYECTOS",
            link:"visitar",
            gitHub:"codigo",
            whatIs:"Qué es?--> ",
            function:"Cual es su funcion?--> ",
            duration:"Duracion--> "
        }
    }

    return(
        <>
            <span className="titulo">{info[len].tittle}</span>
            <div className="area" id="proyectos">
                <div id="proyectosMap">
                    {proyects[len].map((p,i)=>{
                        return(
                            <div className="proyecto" key={i}>
                                    <a href={p.link}>{info[len].link}</a>
                                    <img alt={p.name} onMouseEnter={()=>setHover(p)} onMouseLeave={()=>setHover(hoverInit)} src={p.pict}></img>
                                    <a href={p.gitHub}>{info[len].gitHub}</a>
                            </div>
                        )
                    })}
                </div>
                <div className={hover.name?"show":"hidden"}>
                    {hover.name&&<span id="arrow">{">"}</span>}
                    <div> 
                        <h1 className="showEl">{hover.name}:</h1>
                        <h2 className="showEl">{info[len].whatIs+hover.descripcion}</h2>
                        <h2 className="showEl">{info[len].function+hover.funcionalidad}</h2>
                        <h2 className="showEl">{info[len].duration+hover.tiempo}</h2>
                    </div>
                </div>
            </div>
        </>
    )   
}

export default Proyectos

//ancho letras texto fondo porta intro con cpli https://www.aulaclic.es/guia-office-2013/t_11_4.htm