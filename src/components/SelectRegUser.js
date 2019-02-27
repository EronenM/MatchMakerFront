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
                <Button>Consultant</Button>
                &nbsp;
                <Button>Myyjä</Button>
            </div>
        );
    }
}

export default SelectRegUser;