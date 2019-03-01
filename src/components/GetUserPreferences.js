import React, { Component } from 'react';
import {getUserPreferenceData, deleteUserData} from '../serviceclient';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import { Redirect } from 'react-router-dom';

class GetUserPreferences extends Component {
    state = {userPreferenceData:[], redirect:false}
    componentDidMount(){

        getUserPreferenceData(sessionStorage.cardButtonID).then(data => {
            this.setState({userPreferenceData : data })
        })
        console.log("state",this.state.userPreferenceData)
    }
    cardDeleteFunction = (e) => {
        e.preventDefault();
        deleteUserData(e.target.value).then(function(response){
            console.log("delete response",response)
        })
        this.setState({redirect : true})
    }

    goBackFunction = (e) => {
        e.preventDefault();
        this.setState({redirect:true})
    }

    render() {
        const {redirect} = this.state;


if (redirect) {
    return <Redirect to='/ConsultantView' push="true"/>;
  }

        const preferenssiprintti = this.state.userPreferenceData.map(value => {
            return (<Card key={value.person_id}>
                <Card.Body>
                    <Card.Title>Consultant details</Card.Title>
                    
                    
                
                <Card.Subtitle className="mb-2 text-muted">Top 3 Fields</Card.Subtitle>
                <ListGroup>
                    <ListGroupItem>#1 {value.fieldofinterest1}</ListGroupItem>
                    <ListGroupItem>#2 {value.fieldofinterest2}</ListGroupItem>
                    <ListGroupItem>#3 {value.fieldofinterest3}</ListGroupItem>
                </ListGroup>
                <br/>
                    <Card.Subtitle>Top 3 Technologies</Card.Subtitle>
                <ListGroup>
                    <ListGroupItem>#1 {value.technology1}</ListGroupItem>
                    <ListGroupItem>#2 {value.technology2}</ListGroupItem>
                    <ListGroupItem>#3 {value.technology3}</ListGroupItem>
                </ListGroup>
                <br/>
                <Card.Subtitle>Top 3 Positions</Card.Subtitle>
                <ListGroup>
                    <ListGroupItem>#1 {value.position1}</ListGroupItem>
                    <ListGroupItem>#2 {value.position2}</ListGroupItem>
                    <ListGroupItem>#3 {value.position3}</ListGroupItem>
                </ListGroup>
                </Card.Body>
                {console.log(sessionStorage.cardButtonID)}
                <div className="SmallButton" align="center">
                <ButtonGroup vertical >
                <Button  variant="success" onClick={this.goBackFunction}>Back to list</Button>
                &nbsp;
                <Button variant="danger" onClick={this.cardDeleteFunction} value={sessionStorage.cardButtonID}>Delete user</Button>
                &nbsp;
                </ButtonGroup>
                </div>
                </Card>
            )
        })
        console.log("preferenssiprintti",preferenssiprintti)
        console.log("user-state",this.state.userPreferenceData)
        return (
            <div className="UpperCreateForm">
                {preferenssiprintti[preferenssiprintti.length -1]}
                
            </div>
        );
    }
}

export default GetUserPreferences;