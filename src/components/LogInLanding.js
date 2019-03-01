import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { logInUser } from '../serviceclient'
// import GetAllLanding from './GetAllLanding';
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
            // sessionStorage.newUserCreated="false";
            sessionStorage.userID=response.person_id;
            if (sessionStorage.userID>=0) {
                
                sessionStorage.isLogged="true";
                sessionStorage.whoareyou=response.usertype;
                sessionStorage.logintiedot=JSON.stringify(response)
                this.setState({redirect:true});
            }
        });
    }

    render() {
        
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/ConsultantView' push="true"/>;
          }

        //   if (sessionStorage.newUserCreated==="true") {
        //      // tähän voi leipoa viestin kun on tehty uusi käyttäjä
        //   }  
          return (
            <div>
                <h2>Welcome to MatchMaker, fellow Academic Worker (or soon to be)!</h2>
                <Form>
                    <Form.Group>
                        {/* <Form.Label>enter your email</Form.Label> */}
                        <Form.Control type="text" placeholder="Email" onChange={this.emailChanged}></Form.Control>
                    </Form.Group>

                    <Form.Group>
                        {/* <Form.Label>enter your password</Form.Label> */}
                        <Form.Control type="password" placeholder="Password" onChange={this.passwordChanged}></Form.Control>
                    </Form.Group>
                    
                    <Button variant="success" onClick={this.postLogInInformation}>Log In</Button>
                </Form>
            </div>
        );
    }
}

export default LogInLanding;