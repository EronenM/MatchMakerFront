import React, { Component } from 'react';
import InputPreferences from './InputPreferences';
import GetAllLanding from './GetAllLanding';

class ConsultantView extends Component {
    state = {firstname:"", lastname:"", course:"C#", description:"", email:"", password:"", usertype:"", person_id:0, redirect:false}
    componentDidMount(){
      const userdata =  JSON.parse(sessionStorage.logintiedot)
      console.log("Cv",userdata)
      this.setState({person_id:userdata.person_id})
      this.setState({firstname:userdata.firstname})
      this.setState({lastname:userdata.lastname})
      this.setState({course:userdata.course})
      this.setState({email:userdata.email})
      this.setState({description:userdata.description})
      if (userdata.usertype===true) {
          this.setState({usertype:"Consultant"})         
      }
      if (userdata.usertype===false) {
          this.setState({usertype:"Salesperson"})
      }

      

    }
    

           renderThis (hevonen) {
      
              if (this.state.usertype === "Consultant") {
                 
                      return <InputPreferences/>
                  }
                  else return <GetAllLanding/>
              
            }
    
        

    render() {
            

        return (
            <div>
                <h1>Hello {this.state.firstname} {this.state.lastname}!</h1>
                <br/>
                <h4>{this.state.usertype} of {this.state.course} course.</h4>
                <br/>
            
                {this.renderThis()}
                {/* <InputPreferences/> */}
            </div>
        );
    }
}

export default ConsultantView;