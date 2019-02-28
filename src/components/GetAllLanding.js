import React, { Component } from 'react';
import { getAllUsers, deleteUserData } from '../serviceclient';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';



class GetAllLanding extends Component {
    state={getAllResults:[], userPreferenceData:[], redirect:false, /*redirect2:false*/}
    constructor(props){
        super(props);
    }


// ------- Kun componentDidMount -> GetAll API:sta hakee kaikki siellä olevat peoplet staten getAllResults arrayhyn
    componentDidMount(){

        getAllUsers().then( data => {
            console.log("GetAllUsers", data)
            this.setState({getAllResults : data})
        } )

    }
    
    cardButtonFunction = (e) => {
        e.preventDefault();
        sessionStorage.cardButtonID=e.target.value;
        console.dir(this.props);
         this.setState({redirect:true})
    }

    cardDeleteFunction = (e) => {
        e.preventDefault();
        deleteUserData(e.target.value).then(function(response){
            console.log("delete response",response)
        })

        
    }
    

    
    render() {
// ------ Statessa oleva getAllResults mapataan allTheResults constiin jolla printataan dataa alaspäi
// ------ Pitää muistaa, että haussa, jossa haetaan jotain spesifiä konsulttia tietoineen pitää hake joinilla
// ------ molemmista tauluista, jotta saadaan relevantteja tuloksia; haku SQL:ään on jotain (ehkä) mallia:
// ------ select * from People pe join Preferences pf on pe.person_id = pf.person_id where position1 = 'Software Architect'
const {redirect} = this.state;
// // const {redirect2} = this.state;

if (redirect) {
    return <Redirect to='/GetUserPreferences' push="true"/>;
  }


//   if (redirect2) {
//     return <Redirect to='/GetAllLanding' push="true"/>;
//   }
        const allTheResults = this.state.getAllResults.map( value => {
            return  <Card key={value.person_id} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{value.firstname} {value.lastname}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{value.course} course</Card.Subtitle>
              <Card.Text>
                {value.description}
              </Card.Text>
              <Button onClick={this.cardButtonFunction} value={value.person_id}>User preferences</Button>
              
              {/* <Button onClick={this.cardDeleteFunction} value={value.person_id}>Delete user</Button> */}
            </Card.Body>
          </Card>;
        }
        )

        return (
            <div>
                <h2>Below you can see available users</h2>
{/* //--------------allTheResults printtaa mitä ikinä mappi funktio vetää allTheResultsiin */}
                {allTheResults}
            </div>
        );
    }
}

export default GetAllLanding;