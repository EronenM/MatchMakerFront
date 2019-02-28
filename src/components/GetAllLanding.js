import React, { Component } from 'react';
import { getAllUsers } from '../serviceclient';


class GetAllLanding extends Component {
    state={getAllResults:[]}

// ------- Kun componentDidMount -> GetAll API:sta hakee kaikki siellä olevat peoplet staten getAllResults arrayhyn
    componentDidMount(){

        getAllUsers().then( data => {
            console.log("GetAllUsers", data)
            this.setState({getAllResults : data})
        } )
    }
    
    render() {
// ------ Statessa oleva getAllResults mapataan allTheResults constiin jolla printataan dataa alaspäi
// ------ Pitää muistaa, että haussa, jossa haetaan jotain spesifiä konsulttia tietoineen pitää hake joinilla
// ------ molemmista tauluista, jotta saadaan relevantteja tuloksia; haku SQL:ään on jotain (ehkä) mallia:
// ------ select * from People pe join Preferences pf on pe.person_id = pf.person_id where position1 = 'Software Architect'

        const allTheResults = this.state.getAllResults.map( value => {
            return <li> {value.firstname} {value.lastname} is the best, moikka to the rest. </li>
        }
        )

        return (
            <div>
                <h1>Tässä on nää kaikki hakutulokset</h1>
{/* //--------------allTheResults printtaa mitä ikinä mappi funktio vetää allTheResultsiin */}
                {allTheResults}
            </div>
        );
    }
}

export default GetAllLanding;