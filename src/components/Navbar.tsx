import React from 'react'
import { Link } from 'react-router-dom'

const logoCss = {

}

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <h1 className="logoBNI" >
                        BNI
                    </h1>
                </a>
                <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars" />
                </button>
                <div className="collapse navbar-collapse" id="mainNavbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Grupos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Quadros</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Usuários</a>
                        </li>
                    </ul>
                    <form className="d-flex input-group w-auto">
                        <Link to='/login'>
                            <button
                                className="btn btn-outline-light btn-lg"
                                type="button"
                                data-mdb-ripple-color="light"
                            >
                                Entrar
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}
