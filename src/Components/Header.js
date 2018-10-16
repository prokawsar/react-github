import React, { Component } from 'react';
import logo from '../logo.svg';

import { BrowserRouter as Router, Link } from 'react-router-dom';

class Header extends Component {
    render(){
        return(
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">
                <Link to="/">
                    <span style={{color: "white"}} className="pull-left" >Home</span>
                </Link>
                 Welcome to Github App
                 
                <Link to="/jobs/">
                    <span style={{color: "white"}} className="pull-right" >Jobs</span>
                </Link>
            </h1>
            
        </header>
           
        );
    }
}

export default Header;