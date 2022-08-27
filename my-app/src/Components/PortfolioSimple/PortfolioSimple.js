import React, { useState } from "react"
import Conocimientos from "./Concimientos"
import Proyectos from "./Proyectos"
import Contacto from "./Contacto"
import Presentacion from "./Presentacion"
import "./Portfolio.css"
const PortfolioSimple=()=>{

    // const [prev,setPrev] = useState("cont")
    // const [actual,setActual] = useState("pres")
    // const [next,setNext] = useState("con")
    // const [divs,setDivs] = useState({pres:"",con:"hide",proy:"hide",cont:"hide"})
    
    // function previo(){
    //     setDivs({...divs,})
    //     divs[prev]="left"
    //     divs[actual]="hideRigth"
    //     divs[prev]="left showLeft"
    //     divs[actual]="hide"

    //     switch(actual){
    //         case "pres":
    //             setPrev("proy")
    //             setActual("cont")
    //             setNext("pres")
    //         break

    //         case "con":
    //             setPrev("cont")
    //             setActual("pres")
    //             setNext("con")
    //         break

    //         case "proy":
    //             setPrev("pres")
    //             setActual("con")
    //             setNext("proy")
    //         break

    //         case "cont":
    //             setPrev("con")
    //             setActual("proy")
    //             setNext("cont")
    //         break
    //     }

    // }

    const divs = ["pres","techs","proy","cont"]
    const completDivs = ["presentacion","tecnologias","proyectos","contacto"]

    let [actual,setActual] = useState("pres")

    // function previo(){
    //     if(actual[0]==="pres"){
    //         setActual(["cont","3"])
    //     } 
    //     else {
    //         setActual([divs[actual[1]-1],actual[1]-1])
    //     }
    // }

    return(
        <div>
            <div id="portfolio">
                {/* <button onClick={()=>previo()} id="prev">{"<"}</button> */}
                {
                    actual==="techs"?<Conocimientos/>
                    :actual==="proy"?<Proyectos/>
                    :actual==="cont"?<Contacto/>
                    :<Presentacion/>
                }
            </div>
            <div id="searchBar">
                <h1 >{"<Secciones>"}</h1>
                {divs.map((d,i)=>{
                    return <div onMouseLeave={(e)=>e.target.innerText=actual===d?d:"-"} onMouseEnter={(e)=>e.target.innerText=completDivs[i]} className={actual===d?"active":"inactive"} onClick={(e)=>setActual(d)}>{actual===d?d:"-"}</div>
                })}
                <h1 >{"</Secciones>"}</h1>
            </div>
        </div>
    )
}



export default PortfolioSimple