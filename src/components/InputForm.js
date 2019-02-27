import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import { createNewUser } from '../serviceclient';

class InputForm extends Component {
    state = {firstname:"", lastname:"", course:"C#", description:"", email:"", password:"", usertype:true}
    
    // -- Allaolevat tiedot tulee edellisestä kohdasta propsina tms
    // konsultti = true = sql bit 1
    // myyjä = false = sql bit 0

    // -- Allaolevat tiedot saattaisi tulla edelliseltä kohdalta propsina tms
    // Kurssioptionit:
    // * C#
    // * JavaScript
    // * ServiceNOW!

    firstnameMuuttui = (e) => {
        this.setState({firstname:e.target.value})
    }

    lastnameMuuttui = (e) => {
        this.setState({lastname:e.target.value})
    }
    
    emailMuuttui = (e) => {
        this.setState({email:e.target.value})
    }

    passwordMuuttui = (e) => {
        this.setState({password:e.target.value})
    }

    //Hashin tekoa ei ole vielä, koska ei perkule ookkaa niin helppoa kuin C# puolella - Onnistuisiko API:ssa?

    courseMuuttui = (e) => {
        this.setState({course:e.target.value})
        //kovakoodaa optionit
    }

    descriptionMuuttui = (e) => {
        this.setState({description:e.target.value})
    }

    // usertypeMuuttui = (e) => {
    //     // Muuta booleaniksi TÄÄ
    //     // this.setState({usertype:e.target.value})
    // }

    registerButton = (e) => {
        e.preventDefault();
        createNewUser(this.state);
    }

//---------------------------------------------------Yläpuolella on formin state-muuttujat------------------------------------

// -- Jos usertype on myyjä -> Mennään suoraan myyjän landing pagelle
// -- Jos usertype on konsultti -> Lähetetään state propseina eteenpäin InputPreferences komponentille

    render() {
        return (
            <div>
                <h1>Register new consultant</h1>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="text" placeholder="First name" onChange={this.firstnameMuuttui}/>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="text" placeholder="Last name" onChange={this.lastnameMuuttui}/>
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" onChange={this.emailMuuttui}/>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" onChange={this.passwordMuuttui}/>
                        </Form.Group>
                    </Form.Row>


{/* Allaolevat usertypet ja courset on kommentoitu pois, koska nämä tiedot pitää välittää myöhemmin lomakkeelle propseina */}
                    {/* <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>User type</Form.Label>
                            <Form.Control as="select" onChange={this.usertypeMuuttui}>
                                <option>Salesdude</option>
                                <option>Konsulttidude</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Course</Form.Label>
                            <Form.Control as="select" onChange={this.courseMuuttui}>
                                <option>C#</option>
                                <option>Javascript</option>
                                <option>ServiceNOW!</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row> */}

                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" onChange={this.descriptionMuuttui}/>
                        </Form.Group>
                    </Form.Row>


                    <Button variant="primary" type="submit" onClick={this.registerButton}>
                        Register
                    </Button>
                </Form>
            </div>
        );
    }
}

export default InputForm;