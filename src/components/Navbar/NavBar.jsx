import React from 'react'

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top justify-content-end">
            <div className="container-fluid justify-content-end">
                <button className="navbar-toggler justify-content-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">HOME</a>
                        <a className="nav-link" href="#">ABOUT ME</a>
                        <a className="nav-link" href="#">SKILLS</a>
                        <a className="nav-link">PROYECTS</a>
                        <a className="nav-link">CONTACT</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar