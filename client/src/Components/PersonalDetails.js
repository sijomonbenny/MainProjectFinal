import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { throws } from 'assert';

class PersonalDetails extends Component{
    saveAndContinue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
                                <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
            <b><a href="/" className="brand-logo">Decentralized FIR Lodging System</a></b>
            <ul className = "right">
            <li active><a href = "/police">Home</a></li>
            <li><a href = "/regfir">Register FIR</a></li>
            <li><a href = "/">Log out</a></li>
            </ul>
            </div>            
            </nav>
            <div style={{marginLeft:200+"px",width:500+"px"}}>
            <h5 className="ui centered">Occurance Details</h5>
            <Form.Field>
                <label>Place of Occurance</label>
                <input placeholder='Place of Occurance'
                onChange={this.props.handleChange('place')}
                defaultValue={values.place}
                />
            </Form.Field>
            <Form.Field>
                <label>Distance From Police Station</label>
                <input placeholder='Distance From Police Station'
                onChange={this.props.handleChange('distpoli')}
                defaultValue={values.distpoli}
                />
            </Form.Field>
            <Form.Field>
                <label>Direction From Police Station</label>
                <input placeholder='Direction From Police Station'
                onChange={this.props.handleChange('dirpol')}
                defaultValue={values.dirpol}
                />
            </Form.Field>
            <Form.Field>
                <label>Date</label>
                <input placeholder='Date'
                onChange={this.props.handleChange('date')}
                defaultValue={values.date}
                />
            </Form.Field>
            <Form.Field>
                <label>Time</label>
                <input placeholder='Time'
                onChange={this.props.handleChange('time')}
                defaultValue={values.time}
                />
            </Form.Field>
            <Form.Field>
                <label>Section of Crime</label>
                <input placeholder='Section of Crime'
                onChange={this.props.handleChange('section')}
                defaultValue={values.section}
                />
            </Form.Field>
            <Form.Field>
                <label>Nature of Crime</label>
                <input placeholder='Nature of Crime'
                onChange={this.props.handleChange('nature')}
                defaultValue={values.nature}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button stye={{backgrounColor:'green'}} onClick={this.saveAndContinue}>Save And Continue </Button>
            </div>
        </Form>
        )
    }
}

export default PersonalDetails;