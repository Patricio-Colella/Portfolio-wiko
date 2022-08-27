import React from "react";
import express from "./techs/express.png"
import javaScript from "./techs/javaScrypt.png"
import nodejs from "./techs/nodejs.png"
import postgress from "./techs/postgress.png"
import react from "./techs/react.png"
import redux from "./techs/redux.png"
import sequelize from "./techs/sequelize.jpg"
import sql from "./techs/sql.png"
import css from "./techs/css.png"
import html from "./techs/html.png"


function Conocimientos(){

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

    return(
        <div id="con">
            <span className="titulo"> tecnologias</span>
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
            <div>

            </div>
        </div>
    )   
}

export default Conocimientos