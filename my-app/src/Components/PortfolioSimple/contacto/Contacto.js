import React, { useRef, useState } from "react";
import {FiMail} from "react-icons/fi"
import {HiOutlineMailOpen} from "react-icons/hi"
import {BsFillPhoneFill, BsLinkedin, BsPhoneVibrateFill} from "react-icons/bs"
import {AiFillFilePdf, AiFillLinkedin} from "react-icons/ai"
import emailjs from "emailjs-com"
import PDFEs from "./C.V spanish.pdf"
import PDFEn from "./C.V english.pdf"
import {ImFilePdf} from "react-icons/im"
import "./Contacto.css"


function Contacto({len}){

    const form = useRef()

    const email = {service_key:"service_yt0vwnc",template_key:"template_hkdugib",client_key:"jU6q-tKWHcfGUHaiQ"}

    const info = {
        EN:{
            tittle:"CONTACT",
            message:"Send me a message!",
            textArea:"How may i help you?",
            submit:"SEND",
            correctSubmit:"Your message has been sended",
            PDF:PDFEn
        },
        ES:{
            tittle:"CONTACTO",
            message:"Enviame un mensaje!",
            textArea:"Como puedo ayudarte?",
            submit:"ENVIAR",
            correctSubmit:"Su mensaje a sido enviado",
            PDF:PDFEs
        }
    }

    const myLinks={
        gmail:"mailto:patriciogabrielcolella@gmail.com",
        whatsapp:"https://api.WhatsApp.com/send?phone=5492665277765",
        linkedIn:"https://www.linkedin.com/in/patricio-colella/"
    }

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(email.service_key,email.template_key,form.current,email.client_key)
        .then(() => {
            alert(info[len].correctSubmit);
            },
            (error) => {
              console.log(error.text);
            }
        );

        e.target.reset();
      };

    let [actual,setActual]=useState("")

    return(
        <>
            <span className="titulo" >{info[len].tittle}</span>
            
            <div className="area" id="contacto">
                <div>
                    <a href={myLinks.gmail} className="elLib" onMouseEnter={()=>setActual("mail")} onMouseLeave={()=>setActual("")}>
                        {actual!=="mail"?<FiMail/>:<HiOutlineMailOpen/>}Gmail   
                    </a>

                    <a href={myLinks.linkedIn} className="elLib" onMouseEnter={()=>setActual("linkedin")} onMouseLeave={()=>setActual("")}> 
                        {actual!=="linkedin"?<AiFillLinkedin/>:<BsLinkedin/>}LinkedIn
                    </a>

                    <a href={myLinks.whatsapp}  className="elLib" onMouseEnter={()=>setActual("phone")} onMouseLeave={()=>setActual("")}>
                        {actual!=="phone"?<BsFillPhoneFill/>:<BsPhoneVibrateFill/>}WhatsApp
                    </a>

                    <a className="elLib" href={info[len].PDF} onMouseEnter={()=>setActual("C.V.")} onMouseLeave={()=>setActual("")} download="Patricio Colella C.V.pdf">
                        {actual!=="C.V."?<AiFillFilePdf></AiFillFilePdf>:<ImFilePdf></ImFilePdf>}C.V.
                    </a> 
                </div>
                <form ref={form} onSubmit={sendEmail}>

                    <span>{info[len].message}</span>

                    <input name="user_email"  spellcheck="false" placeholder="mail"></input>

                    <textarea name="message" spellcheck="false" placeholder={info[len].textArea}></textarea>

                    <input type="submit" value={info[len].submit}></input>

                </form> 
            </div>
        </>
    )   
}

export default Contacto