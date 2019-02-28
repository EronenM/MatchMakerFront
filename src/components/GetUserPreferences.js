import React, { Component } from 'react';
import {getUserPreferenceData} from '../serviceclient';

class GetUserPreferences extends Component {
    state = {userPreferenceData:[]}
    componentDidMount(){

        getUserPreferenceData(sessionStorage.cardButtonID).then(data => {
            this.setState({userPreferenceData : data })
        })
    }
    render() {
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
                {preferenssiprintti}
            </div>
        );
    }
}

export default GetUserPreferences;