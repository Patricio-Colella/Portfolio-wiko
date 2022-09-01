import React from "react";
import express from "./imgs/express.png"
import javaScript from "./imgs/javaScrypt.png"
import nodejs from "./imgs/nodejs.png"
import postgress from "./imgs/postgress.png"
import react from "./imgs/react.png"
import redux from "./imgs/redux.png"
import sequelize from "./imgs/sequelize.jpg"
import sql from "./imgs/sql.png"
import css from "./imgs/css.png"
import html from "./imgs/html.png"
import "./Tecnologias.css"


function Tecnologias({len}){

    const techs = [
        {name:"express",img:express,link:"https://expressjs.com/"},
        {name:"javaScript",img:javaScript,link:"https://www.javascript.com/"},
        {name:"nodejs",img:nodejs,link:"https://nodejs.org/en/"},
        {name:"postgress",img:postgress,link:"https://www.postgresql.org/"},
        {name:"react",img:react,link:"https://reactjs.org/"},
        {name:"redux",img:redux,link:"https://redux.js.org/"},
        {name:"sequelize",img:sequelize,link:"https://sequelize.org/"},
        {name:"sql",img:sql,link:"https://en.wikipedia.org/wiki/SQL"},
        {name:"css",img:css,link:"https://www.w3.org/Style/CSS/Overview.en.html"},
        {name:"html",img:html,link:"https://html.com/"}
    ]

    const info = {
        EN:{
            titulo:"TECHNOLOGIES"
        },
        ES:{
            titulo:"TECNOLOGIAS"
        },
    }

    return(
        <>
            <span className="titulo">{info[len].titulo}</span>
            <div className="area" id="tecnologias">
            {
                techs.map((t,i)=>{
                    return(
                        <a key={i} href={t.link} className="tech">
                            <img alt={t.name} src={t.img}></img>
                            <span>{t.name}</span>
                        </a>
                    )
                })
            }
            </div>
        </>
    )   
}

export default Tecnologias