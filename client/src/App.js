import React, { Component } from "react";

import {Router, Route, browserHistory, Redirect} from "react-router";
import MainForm from './Components/MainForm';
import Home from './Components/Home'
import VerifyHome from './Components/VerifyHome';
import NewFIR from './Components/NewFIR';
import RegFIR from './Components/RegFir';
import ViewCase from './Components/ViewCase';
import Forensics from './Components/CrimeDetails/Forensics';
import ForensicHome from './Components/ForensicHome';
import ForensicUpdate from './Components/ViewForensic';
import PoliceHome from './Components/PoliceHome';
import "./App.css";

class App extends Component {

  render() {
      return (
        <Router history={browserHistory}>   
            <Redirect from="/" to="/home" />
            <Route> 
             <Route path = "official" component = {PoliceHome}/>
              <Route path = "police" component = {VerifyHome}/>
              <Route path = "newfir" component = {NewFIR}/>
              <Route path = "regfir" component = {MainForm}/>
              <Route path = "viewcase/:caseId" component = {ViewCase}/>
              <Route path = "home" component = {Home}/>
              <Route path = "forensichome" component = {ForensicHome}/>
              <Route path = "crimedata/forensics/:caseId/" component = {Forensics}/>   
              <Route path = "forensicUpdate/:caseId" component = {ForensicUpdate}/>
               
            </Route>                 
        </Router>
    );
  }
}
export default App;
