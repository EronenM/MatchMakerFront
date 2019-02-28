import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


class LogInLanding extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>
                <h2>Enter your credentials</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>enter your email</Form.Label>
                        <Form.Control type="text"></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>enter your password</Form.Label>
                        <Form.Control type="password"></Form.Control>
                    </Form.Group>

                    <Button onClick={this.postLogInInformation}>Log In</Button>
                </Form>
            </div>
        );
    }
}

export default LogInLanding;