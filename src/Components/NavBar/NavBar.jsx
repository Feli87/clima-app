import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
        <Link to="/home" className="navbar-brand">Clima App</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Link to="/page1" className="nav-link">Página 1 </Link>
            </li>
            <li className="nav-item">
            <Link to="/page2" className="nav-link">Página 2 </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>

    );
  }

}

export default NavBar;
