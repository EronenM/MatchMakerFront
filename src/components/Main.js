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
                <div className="loginFormBackGround">

                    {/* <NavLink to='/LogInLanding'>
                    <Button variant="dark">Log In</Button>
                    </NavLink> */}
                    <LogInLanding />

                    <NavLink to='/InputForm'>
                        <br /> Create new account
                </NavLink>
                </div>
            </div>
        );
    }
}

export default Main;