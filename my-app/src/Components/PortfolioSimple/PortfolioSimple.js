import React, { useState } from "react"
import Tecnologias from "./techs/Tecnologias"
import Proyectos from "./proyectos/Proyectos"
import Contacto from "./contacto/Contacto"
import Presentacion from "./presentacion/Presentacion"
import "./Portfolio.css"
const PortfolioSimple=()=>{

    const divs = ["pres","techs","proy","cont"]

    let [toogletype,setType]=useState("toogleB")
    let [actual,setActual] = useState("pres")
    let [lenguaje,setLenguaje] = useState("ES")

    const info = {
        EN:{
            Sections:"<Sections>",
            completDivs:["presentation","technologies","proyects","contact"],
        },
        ES:{
            Sections:"<Secciones>",
            completDivs:["presentación","tecnologías","proyectos","contacto"]
        }
    }

    return(
        <div>
            <div id="portfolio">
                {
                    actual==="techs"?<Tecnologias len={lenguaje}/>
                    :actual==="proy"?<Proyectos len={lenguaje}/>
                    :actual==="cont"?<Contacto len={lenguaje}/>
                    :<Presentacion len={lenguaje}/>
                }
            </div>
            <div id="searchBar">
                <h1 dataRes="<>">{info[lenguaje].Sections}</h1>
                {divs.map((d,i)=>{
                    return <div onMouseLeave={(e)=>e.target.innerText=actual===d?">"+d+"<":"-"} onMouseEnter={(e)=>e.target.innerText=info[lenguaje].completDivs[i]} onClick={(e)=>setActual(d)}>{actual===d?">"+d+"<":"-"}</div>
                })}
                <h1>{info[lenguaje].Sections}</h1>
            </div>
            <span onMouseEnter={()=>setType("toogleB2")} onMouseLeave={()=>setType("toogleB")} onClick={(e)=>{setLenguaje(lenguaje==="EN"?"ES":"EN")}} id={toogletype}>{lenguaje}</span>
            <span onMouseEnter={()=>setType("toogleB2")} onMouseLeave={()=>setType("toogleB")} onClick={(e)=>{setLenguaje(lenguaje==="EN"?"ES":"EN")}} id="toogleS">toogle</span>
        </div>
    )
}



export default PortfolioSimple