import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import {NavLink} from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ButtonToolbar>
                    &nbsp;
                    <NavLink to='/'>
                    <Button variant="secondary">Main</Button>
                    </NavLink>

                    &nbsp;
                    <NavLink to='/SelectRegUser'>
                    <Button variant="info">Register</Button>
                    </NavLink>


                    &nbsp;                
                    <NavLink to='/InputForm'>
                    <Button variant="info">ToimivaCraeteUser</Button>
                    </NavLink>

                    &nbsp;                
                    <NavLink to='/InputPreferences'>
                    <Button variant="info">ToimivaInputPreferences</Button>
                    </NavLink>

                    &nbsp;
                    <NavLink to='/APIOutput'>
                    <Button variant="dark">APIOutput</Button>
                    </NavLink>

                    &nbsp;
                    <NavLink to='/GetAllLanding'>
                    <Button variant="dark">GetAllLanding</Button>
                    </NavLink>

                    &nbsp;
                    <NavLink to='/LogInLanding'>
                    <Button variant="dark">LogInLanding</Button>
                    </NavLink>

                    &nbsp;
                    <NavLink to='/GetUserPreferences'>
                    <Button variant="dark">prefrencekomponenti</Button>
                    </NavLink>
                </ButtonToolbar>
            </div>
        );
    }
}

export default Navbar;