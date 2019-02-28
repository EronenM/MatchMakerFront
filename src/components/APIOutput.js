import React, { Component } from 'react';
import {haeFieldOfInterest, getUserPreferenceData} from '../serviceclient';
import Form from 'react-bootstrap/Form';
import { Col } from 'react-bootstrap';

class APIOutput extends Component {
    state = {fieldOfInterest : [], fieldOfInterest2 : [], userPreferenceData:[]}
    componentDidMount(){

        getUserPreferenceData(17).then(data => {
            this.setState({userPreferenceData : data })
        })
       
        
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
        console.log("staten taulukko of preferences", this.state.userPreferenceData)
        const preferenssiprintti = this.state.userPreferenceData.map(value => {
            return (<ul>
                <li>{value.fieldofinterest1}</li>
                <li>{value.fieldofinterest2}</li>
                <li>{value.fieldofinterest3}</li>
                <li>{value.technology1}</li>
                <li>{value.technology2}</li>
                <li>{value.technology3}</li>
                <li>{value.position1}</li>
                <li>{value.position2}</li>
                <li>{value.position3}</li>
                </ul>
            )
        })
     
            
        return (
            <div>
                <h1>Tänne tulee apidataa</h1>
                <p>Tää oli tämmönen testisivusto, loppukäytön kannalta vielä arveluttavaa, että mihin tätä käytetään.</p>
                
                    {preferenssiprintti}
                
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