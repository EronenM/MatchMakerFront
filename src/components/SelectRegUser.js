import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom';

class SelectRegUser extends Component {
    render() {
        return (
            <div>
                <h1>Select your user type</h1>
                {/* <NavLink to='/SelectRegUser'>
                </NavLink> */}
                    <NavLink to='/InputForm'>
                    <Button variant="dark">Myyjä</Button>
                    </NavLink>
               

                    &nbsp;
                    <NavLink to='/InputFormConsultant'>
                    <Button variant="dark">Consultant</Button>
                    </NavLink>
            </div>
        );
    }
}

export default SelectRegUser;