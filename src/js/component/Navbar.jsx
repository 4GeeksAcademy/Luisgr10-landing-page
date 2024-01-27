import React from "react";


const Navbar = () => {


    return (
        <nav className="navbar sticky-top bg-primary navbar-expand-lg bg-body-tertiary container-fluid">
        <div className="container-fluid">
            <a className="navbar-brand fs-3" href="#">React</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5" href="#">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link fs-5" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

);
}


export default Navbar;