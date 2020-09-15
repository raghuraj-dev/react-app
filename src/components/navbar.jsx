import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Song varikal</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/song" className="nav-link">Songs</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/singer" className="nav-link">Singers</Link>
                        </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar