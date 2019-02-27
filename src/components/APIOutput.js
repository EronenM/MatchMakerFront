import React, { Component } from 'react';
import {haeFieldOfInterest} from '../serviceclient';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';

class APIOutput extends Component {
    state = {fieldOfInterest : [], fieldOfInterest2 : []}
    componentDidMount(){

        
// -- haeFieldOfInterest palauttaa promisena parsitun JSON datan (objekti) ja asettaa sen stateen
        haeFieldOfInterest().then(data => {
            this.setState({fieldOfInterest : data })
        })
       
        
    }
    render() {
        // const testiprintti = this.state.fieldOfInterest.map(value => {
        //     return <li>{value}</li>
        const testiprintti = this.state.fieldOfInterest.map(value => {
            return <option>{value}</option>
        })
  
            
        return (
            <div>
                <h1>Tänne tulee apidataa</h1>
                <p>Tää oli tämmönen testisivusto, loppukäytön kannalta vielä arveluttavaa, että mihin tätä käytetään.</p>
                <Form>
               
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Field of interest fetchillä</Form.Label>
                            <Form.Control as="select">
                                {testiprintti}
                            </Form.Control>
                        </Form.Group>

                 
          
                </Form>
            </div>
        );
    }
}

export default APIOutput;