import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class LogInLanding extends Component {
    render() {
        return (
            <Form>
                <h1>MatchMaker</h1>
                <h3>Welcome fellow Acadamic Worker (or future to be)!</h3>
                <p>Please log in or create a new account to join the fun</p>
                <Form.Group controlId="forGroupEmail">
                    <Form.Label>enter your email</Form.Label>
                    <Form.Control type="email" placeholder="youremail@example.com"></Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Label>enter your password</Form.Label>
                    <Form.Control type="password" placeholder="password"></Form.Control>
                </Form.Group>

                <Button onClick={this.postLogInInformation}>Log In</Button>
            </Form>
        );
    }
}

export default LogInLanding;