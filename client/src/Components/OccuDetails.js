import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class OccuDetails extends Component{

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
            <h5 className="ui centered">Enter Crime Details</h5>
            <Form.Field>
                <label>Collected Particular Details</label>
                <input placeholder='Collected Particular Details'
                onChange={this.props.handleChange('particular')}
                defaultValue={values.particular}
                />
            </Form.Field>
            <Form.Field>
                <label>Accussed Details</label>
                <input placeholder='Accussed Details'
                onChange={this.props.handleChange('accussed')}
                defaultValue={values.accussed}
                />
            </Form.Field>
            <Form.Field>
                <label>Aadhar ID of Accuessed</label>
                <input placeholder='Aadhar ID of Accuessed'
                onChange={this.props.handleChange('aadhar')}
                defaultValue={values.aadhar}
                />
            </Form.Field>
                        <Form.Field>
                <label>Witness Details</label>
                <input placeholder='Witness Details'
                onChange={this.props.handleChange('witness')}
                defaultValue={values.witness}
                />
            </Form.Field>
            <Form.Field>
                <label>Description</label>
                <input placeholder='Description'
                onChange={this.props.handleChange('report')}
                defaultValue={values.report}
                />
            </Form.Field>
            <Button onClick={this.back}>Back</Button>
            <Button onClick={this.saveAndContinue}>Save And Continue </Button>
            </div>
        </Form>
        )
    }
}

export default OccuDetails;