import React, { Component } from 'react';
import logo from './logo.svg';
import {Route,BrowserRouter} from 'react-router-dom'
import './App.css';
import Navmenu from './Components/Navmenu';
import Home from './Components/Home';
import Contact from'./Components/Contact'
import Services from'./Components/Services';
import Entrepreneurs from'./Components/Entrepreneurs';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
    <Navmenu />
    
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Contact" component={Contact} />
      <Route  path="/Services" component={Services} />
      <Route  path="/Services" component={Services} />
      <Route  path="/Services/Forentrepreneurs" component={Entrepreneurs} />

      </div>
      </BrowserRouter>
    );
  }
}

export default App;
