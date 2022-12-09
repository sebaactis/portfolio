import React from 'react'
import img from "../../img/avataaars.png"
import imgCode from "../../img/code.jpg"

const Main = () => {
    return (
        <div className="main">
            <img src={img} width="250" alt="avatar" />
            <p className="mainHello"> Hello, I'm <span className="nameMain"> Sebastian Actis </span></p>
            <p className="mainFullStack"> Full Stack Developer</p>
            <img src={imgCode} width="50%"  alt="avatar" id="about" />

        </div>
    )
}

export default Main