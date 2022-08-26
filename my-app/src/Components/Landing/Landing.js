import React from "react"
import "./Landing.css"
import {useNavigate} from "react-router-dom"
import morpheus from "./choice.png"

const Landing=()=>{

    const navigate = useNavigate()

    function changeText(e,text){
        e.target.innerText=text
    }

    function choosed(link){
        navigate(link)   
    }
    
    return(
        <div id="choice">
            <img alt="morpheus" className="el" src={morpheus}></img>
            <button className="el" onClick={()=>choosed("/arcade")} onMouseLeave={(e)=>changeText(e,"10011")} onMouseEnter={(e)=>changeText(e,"arcade")} id="button1">10011</button>
            <button className="el" onClick={()=>choosed("/simple")} onMouseLeave={(e)=>changeText(e,"01100")} onMouseEnter={(e)=>changeText(e,"simple")} id="button2">01100</button>
        </div>
    )
}

export default Landing