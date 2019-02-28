import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import InputForm from './InputForm';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import APIOutput from './APIOutput';
import InputPreferences from './InputPreferences';
import SelectRegUser from './SelectRegUser';
import GetAllLanding from './GetAllLanding';
import LogInLanding from './LogInLanding';
import ConsultantView from './ConsultantView';
import GetUserPreferences from './GetUserPreferences';


class Landing extends Component {
    render() {
        return (
            <div>
                {/* ------- Selvitettävä vähän tätä, että miten tää routing oikein toimii */}
                <Router>
                    <div>

                    <Navbar/>
                        <Switch>
                            <Route exact path='/' component={Main}/>
                            <Route path='/SelectRegUser' component={SelectRegUser}/>
                            <Route path='/InputForm' component={InputForm}/>
                            <Route path='/APIOutput' component={APIOutput}/>
                            <Route path='/InputPreferences' component={InputPreferences}/>
                            <Route path='/GetAllLanding' component={GetAllLanding}/>
                            <Route path='/LogInLanding' component={LogInLanding}/>
                            <Route path='/ConsultantView' component={ConsultantView}/>
                            <Route path='/GetUserPreferences'component={GetUserPreferences}/>
                            {/* <Route path='/InputFormConsultant' render={ () => { this.props.konsultti="consultant"}} component={InputForm}/> */}
                        </Switch>
                    </div>
                </Router>
                
                
            </div>
        );
    }
}

export default Landing;