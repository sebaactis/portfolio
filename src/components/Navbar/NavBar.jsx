import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar w-100 navbar-expand-lg navbar-light fixed-top justify-content-end">
            <div className="container-fluid justify-content-end">
                <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse links navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        
                        <li><a className="nav-link" href="#home">HOME</a></li>
                        <li><a className="nav-link" href="#about">ABOUT ME</a></li>
                        <li><a className="nav-link" href="#skills">SKILLS</a></li>
                        <li><a className="nav-link" href="#proyects">PROYECTS</a></li>
                        <li><a className="nav-link" href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar