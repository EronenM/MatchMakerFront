import React, { Component } from 'react';
import SelectRegUser from './SelectRegUser';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';
import LogInLanding from '../LogInLanding.js';
import './Main.css';

class Main extends Component {
    render() {
        return (
            <div className="main">
                <h1>Main</h1>

                <p>Tästä lähtee Register / Login joka lopulta tulee vaikuttamaan mitä navbarin palasia käyttäjälle näkyy</p>
                {/* <NavLink to='/LogInLanding'>
                    <Button variant="dark">Log In</Button>
                    </NavLink> */}
                <LogInLanding />

                <NavLink to='/InputForm'>
                    <Button variant="dark">Register</Button>
                </NavLink>
            </div>
        );
    }
}

export default Main;