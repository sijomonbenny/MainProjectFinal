import React, { Component } from 'react';
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import OccuDetails from './OccuDetails';
import Confirmation from './Confirmation';
import Success from './Success';
import PoliceHome from './PoliceHome';
class MainForm extends Component {
    state = {
        step: 1,
        fname : '',
        name:'',
        addr1:'',
        addr2:'',
        city:'',
        state:'',
        phone:'',
        email:'',
        place:'',
        distpoli:'',    
        dirpol:'',
        date:'',
        time:'',
        nature:'',
        section:'',
        particular:'',
        accussed:'',
        aadhar:'',
        witness:'',
        report:''
    }

    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

    render(){
        const {step} = this.state;
        const { fname,name,addr1,addr2,city,state,phone,email,place,distpoli,dirpol,date,time,nature,section,particular,accussed,aadhar,witness,report } = this.state;
        const values = { fname,name,addr1,addr2,city,state,phone,email,place,distpoli,dirpol,date,time,nature,section,particular,accussed,aadhar,witness,report };
        switch(step) {
        case 1:
            return <UserDetails
                    nextStep={this.nextStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <OccuDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 4:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 5:
            return <PoliceHome />
        }
    }
}

export default MainForm;