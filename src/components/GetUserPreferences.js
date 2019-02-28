import React, { Component } from 'react';
import {getUserPreferenceData, deleteUserData} from '../serviceclient';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';

class GetUserPreferences extends Component {
    state = {userPreferenceData:[], redirect:false}
    componentDidMount(){

        getUserPreferenceData(sessionStorage.cardButtonID).then(data => {
            this.setState({userPreferenceData : data })
        })
    }
    cardDeleteFunction = (e) => {
        e.preventDefault();
        deleteUserData(e.target.value).then(function(response){
            console.log("delete response",response)
        })
        this.setState({redirect : true})
    }
    render() {
        const {redirect} = this.state;


if (redirect) {
    return <Redirect to='/ConsultantView' push="true"/>;
  }
        const preferenssiprintti = this.state.userPreferenceData.map(value => {
            return (<ul key={value.person_id}>
                <li>{value.fieldofinterest1}</li>
                <li>{value.fieldofinterest2}</li>
                <li>{value.fieldofinterest3}</li>
                <li>{value.technology1}</li>
                <li>{value.technology2}</li>
                <li>{value.technology3}</li>
                <li>{value.position1}</li>
                <li>{value.position2}</li>
                <li>{value.position3}</li>
                {console.log(sessionStorage.cardButtonID)}
                <Button onClick={this.cardDeleteFunction} value={sessionStorage.cardButtonID}>Delete user</Button>
                </ul>
            )
        })
        return (
            <div>
                {preferenssiprintti[preferenssiprintti.length -1]}
                
            </div>
        );
    }
}

export default GetUserPreferences;