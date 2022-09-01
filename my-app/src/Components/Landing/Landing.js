import React, { useState } from "react"
import "./Landing.css"
import {useNavigate} from "react-router-dom"
import morpheus from "./choice.png"

const Landing=()=>{

    const navigate = useNavigate()

    const arcade={__html:"01110011 0110<br></br>1001 01101101<br></br>01110000 0110<br></br>1100 01100101"}
    const simple={__html:"01100001 0111<br></br>0010 01100011<br></br>01100001 0110<br></br>0100 01100101"}
    
    const [textRed,setTextRed]=useState(arcade)
    const [textBlue,setTextBlue]=useState(simple)

    function choosed(link){
        navigate(link)   
    }
    
    return(
        <div id="choice">
            <img alt="morpheus" className="choiceEl" src={morpheus}></img>
            <button className="choiceEl" onClick={()=>choosed("/arcade")} onMouseLeave={(e)=>setTextRed(arcade)} dangerouslySetInnerHTML={textRed} onMouseEnter={(e)=>setTextRed({__html:"arcade"})} id="red"></button>
            <button className="choiceEl" onClick={()=>choosed("/simple")} onMouseLeave={(e)=>setTextBlue(simple)} dangerouslySetInnerHTML={textBlue} onMouseEnter={(e)=>setTextBlue({__html:"simple"})} id="blue"></button>
        </div>
    )
}

export default Landing