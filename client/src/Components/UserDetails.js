import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class UserDetails extends Component{

    saveAndContinue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }

    render(){
        const { values } = this.props;
        return(

            <Form>
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
                <h5 className="ui centered">Enter Complainant Details</h5>
                <Form.Field>
                    <label>Complainant Name</label>
                    <input
                    placeholder='First Name'
                    onChange={this.props.handleChange('name')}
                    defaultValue={values.name}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Fathers Name</label>
                    <input
                    placeholder='Fathers Name'
                    onChange={this.props.handleChange('fname')}
                    defaultValue={values.fname}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Address Line 1</label>
                    <input
                    type='text'
                    placeholder='Address Line 1'
                    onChange={this.props.handleChange('addr1')}
                    defaultValue={values.addr1}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Address Line 2</label>
                    <input
                    placeholder='Address Line 2'
                    onChange={this.props.handleChange('addr2')}
                    defaultValue={values.addr2}
                    />
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input
                    placeholder='City'
                    onChange={this.props.handleChange('city')}
                    defaultValue={values.city}
                    />
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input
                    type='text'
                    placeholder='State'
                    onChange={this.props.handleChange('state')}
                    defaultValue={values.state}
                    />
                </Form.Field><Form.Field>
                    <label>Email-ID</label>
                    <input
                    type='email'
                    placeholder='Email Address'
                    onChange={this.props.handleChange('email')}
                    defaultValue={values.email}
                    />
                    </Form.Field><Form.Field>
                    <label>Phone Number</label>
                    <input
                    type='Number'
                    placeholder='Phone Number'
                    onChange={this.props.handleChange('phone')}
                    defaultValue={values.phone}
                    />
                </Form.Field>
                <Button onClick={this.saveAndContinue}>Save And Continue </Button>
                </div>
            </Form>
        )
    }
}

export default UserDetails;