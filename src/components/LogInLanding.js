import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { logInUser } from '../serviceclient'
import GetAllLanding from './GetAllLanding';
import { Redirect } from 'react-router-dom';


class LogInLanding extends Component {
    state = {email:"", password:"", redirect:false}

    emailChanged = (e) => {
        this.setState({email:e.target.value})
    }

    passwordChanged = (e) => {
        this.setState({password:e.target.value})
    }

    postLogInInformation = () => {
        logInUser(this.state).then( response => {
            console.log("loginresponse",response)
            sessionStorage.userID=response.person_id;
            
            sessionStorage.logintiedot=JSON.stringify(response)
            this.setState({redirect:true});
        });
    }

    render() {

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/ConsultantView'/>;
          }
        return (
            <div>
                <h1>Login</h1>
                <h2>Enter your credentials</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>enter your email</Form.Label>
                        <Form.Control type="text" onChange={this.emailChanged}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>enter your password</Form.Label>
                        <Form.Control type="password" onChange={this.passwordChanged}></Form.Control>
                    </Form.Group>

                    <Button onClick={this.postLogInInformation}>Log In</Button>
                </Form>
            </div>
        );
    }
}

export default LogInLanding;