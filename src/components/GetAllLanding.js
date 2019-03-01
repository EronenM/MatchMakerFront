import React, { Component } from 'react';
import { getAllUsers} from '../serviceclient';
import Card from 'react-bootstrap/Card'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import { Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';




class GetAllLanding extends Component {
    state={getAllResults:[], userPreferenceData:[], redirect:false, redirect2:false}



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

        console.log("getAllresults",this.state.getAllResults[1]);
        
        console.dir(this.props);
         this.setState({redirect:true})
    }

    // cardDeleteFunction = (e) => {
    //     e.preventDefault();
    //     deleteUserData(e.target.value).then(function(response){
    //         console.log("delete response",response)
    //     })

        
    // }

    logOutFunction = (e) => {
        sessionStorage.clear();
        this.setState({redirect2:true})
    }
    

    
    render() {
// ------ Statessa oleva getAllResults mapataan allTheResults constiin jolla printataan dataa alaspäi
// ------ Pitää muistaa, että haussa, jossa haetaan jotain spesifiä konsulttia tietoineen pitää hake joinilla
// ------ molemmista tauluista, jotta saadaan relevantteja tuloksia; haku SQL:ään on jotain (ehkä) mallia:
// ------ select * from People pe join Preferences pf on pe.person_id = pf.person_id where position1 = 'Software Architect'
const {redirect} = this.state;
const {redirect2} = this.state;

if (redirect) {
    return <Redirect to='/GetUserPreferences' push="true"/>;
  }


  if (redirect2) {
    return <Redirect to='/'/>;
  }
        const allTheResults = this.state.getAllResults.map( value => {
            if (value.usertype) {
              // Lisätty funktio, että näyttää vain ne joilla on preferenset  
           
            
            return <Card key={value.person_id} style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>{value.firstname} {value.lastname}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{value.course} course</Card.Subtitle>          
              <Button variant="success" onClick={this.cardButtonFunction} value={value.person_id}>User preferences</Button>
              
              {/* <Button onClick={this.cardDeleteFunction} value={value.person_id}>Delete user</Button> */}
            </Card.Body>
          </Card>
          ;}
        }
        )

        return (
            <div className="InputPreferences">
                <ButtonGroup>
                    <Button variant="danger" onClick={this.logOutFunction}>Log out</Button>
                </ButtonGroup>
                <h3>Below you can see available consultants</h3>
{/* //--------------allTheResults printtaa mitä ikinä mappi funktio vetää allTheResultsiin */}
<Container>
   

                {allTheResults}
   
</Container>
    
            </div>
        );
    }
}

export default GetAllLanding;