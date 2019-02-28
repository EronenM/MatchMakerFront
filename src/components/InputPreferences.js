import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col } from 'react-bootstrap';
import {haeFieldOfInterest, haePosition, haeTechnology, createPreferences} from '../serviceclient';
import { Redirect } from 'react-router-dom';
import './InputPreferences.css';

class InputPreferences extends Component {
    state = {fieldOfInterest:[], position:[], technology:[], redirect:false, 
//----- Alla on stateen tallennetut, preference tableen menevät tiedot omassa oliossaan (olio state taulun sisäl)
      data: { fieldofinterest1: "",
        fieldofinterest2: "",
        fieldofinterest3: "",
        position1: "",
        position2: "",
        position3: "",
        technology1: "",
        technology2: "",
        technology3: "",
        person_id: sessionStorage.userID} 



    }
    // -- Komponentti saa propseina konsultin login tiedot propseina
    // -- Välimallin feature: InputFormin propsit menee välimallin sivulle jossa on login details ja siitä siirrytään tänne :D
    // -- Tänne tehtävä eventhandlerit, jotka ottavat dropdownien vastaukset stateen ja lähettävät POST pyynnön nappulalla APIn puolelle
    // -- Nappula tulee näkyviin kun kaikki on valittu - Katso voisiko tämän tehdä jollain hienolla bootstrap tsydeemillä

    componentDidMount() {



        // -- haeFieldOfInterest palauttaa promisena parsitun JSON datan (objekti) ja asettaa sen stateen
        haeFieldOfInterest().then(data => {
            this.setState({ fieldOfInterest: data })
        })

        haePosition().then(data => {
            this.setState({ position: data })
        })

        haeTechnology().then(data => {
            this.setState({ technology: data })
        })
    }

    //-----------------------------------------------------------------------

    foi1Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, fieldofinterest1: value } }));
    }

    foi2Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, fieldofinterest2: value } }));
    }
    foi3Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, fieldofinterest3: value } }));
    }

    pos1Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, position1: value } }));
    }

    pos2Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, position2: value } }));
    }

    pos3Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, position3: value } }));
    }

    tec1Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, technology1: value } }));
    }

    tec2Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, technology2: value } }));
    }

    tec3Muuttui = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ data: { ...prevState.data, technology3: value } }));
    }

    createPrefButton = (e) => {
        e.preventDefault();
        console.log("CreatePrefButton");
        createPreferences(this.state.data).then(resp=>console.dir(resp)).then(this.setState({redirect:true}));

    }

    //------ YLäpuolella 12 helvetin eventhandleria + buttonin funktio


    render() {


        const fieldofinterestOption = this.state.fieldOfInterest.map(value => {
            return <option>{value}</option>
        })

        const positionOption = this.state.position.map(value => {
            return <option>{value}</option>
        })

        const technologyOption = this.state.technology.map(value => {
            return <option>{value}</option>
        })

        // ------------ Yllä olevat renderöi dropdowneille saadut tiedot
        // ------------ Tähän voisi lisätä sen, että kun valitsee yhden, niin kakkosessa ei ole enää sitä vaihtoehtoa
        return (
            <div className="UpperInputPreferences">
                <div className="InputPreferences">
                <h2>Let's do some wishful thinking here, shall we?</h2>
                    <Form>
                            <br/>
                           
                            <Form.Control as="select" onChange={this.foi1Muuttui}>
                                <option selected={true} disabled={true}>Select your field of interest #1</option>
                                {fieldofinterestOption}
                            </Form.Control> <br/>

                            <Form.Control as="select" onChange={this.foi2Muuttui}>
                                <option selected={true} disabled={true}>Select your field of interest #2</option>
                                {fieldofinterestOption}
                            </Form.Control><br/>

                            <Form.Control as="select" onChange={this.foi3Muuttui}>
                                <option selected={true} disabled={true}>Select your field of interest #3</option>
                                {fieldofinterestOption}
                            </Form.Control><br/>

                        {/* ----------------------- Yläpuolella Preference Formin Field of Interest osat */}

                            <Form.Control as="select" onChange={this.pos1Muuttui}>
                                <option selected={true} disabled={true}>Select your favourite position #1</option>
                                {positionOption}
                            </Form.Control><br/>

                            <Form.Control as="select" onChange={this.pos2Muuttui}>
                                <option selected={true} disabled={true}>Select your favourite position #2</option>
                                {positionOption}
                            </Form.Control><br/>

                            <Form.Control as="select" onChange={this.pos3Muuttui}>
                            <option selected={true} disabled={true}>Select your favourite position #3</option>

                                {positionOption}
                            </Form.Control><br/>

                        {/* ----------------------- Yläpuolella Preference Formin Position osat */}


                            <Form.Control as="select" onChange={this.tec1Muuttui}>
                            <option selected={true} disabled={true}>Select your favourite technology #1</option>
                                {technologyOption}
                            </Form.Control><br/>

                            <Form.Control as="select" onChange={this.tec2Muuttui}>
                            <option selected={true} disabled={true}>Select your favourite technology #2</option>
                                {technologyOption}
                            </Form.Control><br/>
                            <Form.Control as="select" onChange={this.tec3Muuttui}>
                            <option selected={true} disabled={true}>Select your favourite technology #3</option>
                                {technologyOption}
                            </Form.Control><br/>

                        {/* ----------------------- Yläpuolella Preference Formin Favourite Technology osat */}
                        <br />
                            <Button variant="success" type="submit" onClick={this.createPrefButton}>Save and go to main page</Button>
                            <br/>
                    </Form>
                </div>
            </div>
        );
    }
}

export default InputPreferences;