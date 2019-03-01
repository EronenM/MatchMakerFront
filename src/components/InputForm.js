import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Col } from 'react-bootstrap';
import { createNewUser } from '../serviceclient';
import { Redirect } from 'react-router-dom';
import './InputForm.css';

class InputForm extends Component {
    state = { firstname: "", lastname: "", course: "C#", description: "", email: "", password: "", usertype: false, redirect: false }



    firstnameMuuttui = (e) => {
        this.setState({ firstname: e.target.value })
    }

    lastnameMuuttui = (e) => {
        this.setState({ lastname: e.target.value })
    }

    emailMuuttui = (e) => {
        this.setState({ email: e.target.value })
    }

    passwordMuuttui = (e) => {
        this.setState({ password: e.target.value })
    }

    //Hashin tekoa ei ole vielä, koska ei perkule ookkaa niin helppoa kuin C# puolella - Onnistuisiko API:ssa?
    descriptionMuuttui = (e) => {
        this.setState({ description: e.target.value })
    }


    // -- Allaolevat tiedot saattaisi tulla edelliseltä kohdalta propsina tms
    // Kurssioptionit:
    // * C#
    // * JavaScript
    // * ServiceNOW!
    courseMuuttui = (e) => {
        this.setState({ course: e.target.value })
        //kovakoodaa optionit
    }

    // -- Allaolevat tiedot tulee edellisestä kohdasta propsina tms -- Ei tuukkaan lol
    // konsultti = true = sql bit 1
    // myyjä = false = sql bit 0
    usertypeMuuttui = (e) => {
        if (e.target.value === "I'm a consultant") {
            this.setState({ usertype: true })
            console.log("state-usertype", this.state.usertype)
        }
        if (e.target.value === "I'm a salesperson") {
            this.setState({ usertype: false })
            console.log("state-usertype", this.state.usertype)
        }
        // Mites tää nyt toimii :D
        if (e.target.value === "Select your position") {
            this.setState({ usertype: "" })
            console.log("state-usertype", this.state.usertype)
        }


    }

    registerButton = (e) => {
        e.preventDefault();
        console.log("registeröity state",this.state)
        sessionStorage.newUserCreated="true";
        createNewUser(this.state).then(this.setState({ redirect: true }));
    }

    //---------------------------------------------------Yläpuolella on formin state-muuttujat------------------------------------

    // -- Jos usertype on myyjä -> Mennään suoraan myyjän landing pagelle
    // -- Jos usertype on konsultti -> Lähetetään state propseina eteenpäin InputPreferences komponentille

    render() {

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/'/>;
        }

        return (
            <div className="UpperCreateForm">
                <div className="CreateForm">
                    <h2 id="CreateHeader">Create new account</h2> <br/>
                    {/* {consultantSelected} */}
                    <Form>
                        <Form.Group>
                            <Form.Control type="text" placeholder="First name" onChange={this.firstnameMuuttui} /><br />
                            <Form.Control type="text" placeholder="Last name" onChange={this.lastnameMuuttui} /><br />
                            <Form.Control type="email" placeholder="Email" onChange={this.emailMuuttui} /><br />
                            <Form.Control type="password" placeholder="Password" onChange={this.passwordMuuttui} /><br />
                            <Form.Control as="textarea" placeholder="Copypaste here your Cinode profile link (and any other links the salesperson might find useful)!" rows="3" onChange={this.descriptionMuuttui} /><br />
                            <Form.Control as="select" onChange={this.usertypeMuuttui}>
                                <option>What is your position?</option>
                                <option>I'm a consultant</option>
                                <option>I'm a salesperson</option>
                            </Form.Control><br />
                            <Form.Control as="select" onChange={this.courseMuuttui}>
                                <option>What is your course?</option>
                                <option>C#</option>
                                <option>Javascript</option>
                                <option>ServiceNOW!</option>
                                <option>I'm a salesperson, I don't have a course</option><br />
                            </Form.Control>
                        </Form.Group>
                        <p>You have to fill in all forms in order to continue, sorry!</p>

                        <Button variant="success" type="submit" onClick={this.registerButton}>
                            All done, create my account!
                    </Button>
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
                    </Form>
                </div>
            </div>
        );
    }
}

export default InputForm;