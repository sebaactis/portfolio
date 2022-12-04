import React from 'react'
import img from "../../img/avataaars.png"

const Main = () => {
    return (
        <div className="main">
            <img src={img} width="250" alt="avatar" />
            <p className="mainHello"> Hello, I'm <span className="nameMain"> Sebastian Actis </span></p>
            <p className="mainFullStack"> Full Stack Developer</p>

        </div>
    )
}

export default Main