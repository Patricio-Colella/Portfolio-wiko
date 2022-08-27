import React, { useState } from "react";
import {FiMail} from "react-icons/fi"
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsFillPhoneFill, BsLinkedin, BsPhoneVibrateFill} from "react-icons/bs"
import {AiFillLinkedin} from "react-icons/ai"



function Contacto(){

    let [actual,setActual]=useState("")
    return(
        <div id="Cont">
            <span className="titulo contacto" >CONTACTO</span>
            <div id="lib">
                <h1 className="elLib" onMouseEnter={()=>setActual("mail")} onMouseLeave={()=>setActual("")}>
                    {actual!=="mail"?<FiMail/>:<HiOutlineMailOpen/>}Correo: patriciogabrielcolella@gmail.com    
                </h1>
                <a href="https://www.linkedin.com/in/patricio-colella/" className="elLib" onMouseEnter={()=>setActual("linkedin")} onMouseLeave={()=>setActual("")}> 
                    {actual!=="linkedin"?<AiFillLinkedin/>:<BsLinkedin/>}LinkedIn
                </a>
                <h1 className="elLib" onMouseEnter={()=>setActual("phone")} onMouseLeave={()=>setActual("")}>
                    {actual!=="phone"?<BsFillPhoneFill/>:<BsPhoneVibrateFill/>}Número de teléfono:2665277765
                </h1>
            </div>
            
        </div>
    )   
}

export default Contacto