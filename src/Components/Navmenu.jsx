import React, { Component } from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
class Navmenu extends Component {
  state = {}
  render() {
    return (<div className="App">
      <nav className="nav-bar">
        <ul className="nav-menu">
          <li className="nav-items" > <Link className="nav-link" to="/Home">Home </Link></li>
          <li className="nav-items" > <Link className="nav-link" to="/Servives">Services </Link>
            <ul className="services-items">
              <li className="services-item"> <Link className="services-item-link" to="/Services/Forentrepreneurs" > For entrepreneurs </Link></li>
              <li className="services-item"> <Link className="services-item-link" to="/Services/Forstudents"> For students</Link></li>
              <li className="services-item"> <Link className="services-item-link" to="/Services/Forhobbyists"> For hobbyists</Link></li>
            </ul>
          </li>
          <li className="nav-items"> <Link className="nav-link" to="/Contact">Contact</Link></li>
        </ul>
      </nav>

    </div>
    );
  }
}

export default Navmenu;
