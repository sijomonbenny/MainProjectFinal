import React, { Component } from 'react';
import '../CSS/policeHome.css';
import CaseList from './CaseList';


class PoliceHome extends Component {
    render() {
        return(
            <div>
            <nav className="nav-wrapper grey darken-4 navbar">
            <div className="container">
            <b><a href="/" className="brand-logo">Decentralized FIR Lodging System</a></b>
            <ul className = "right">
            <li active><a href = "/official">Home</a></li>
            <li><a href = "/regfir">Register FIR</a></li>
            <li><a href = "/">Log out</a></li>
            </ul>
            </div>
            
            </nav>
            <h4 className="title-styled" style={{marginTop: "40px", marginLeft: "235px", marginBottom:"10px"}}>List of Verified FIR Reports stored in Block-chain</h4>
            <div className = "container homeList center">
            <div className="card blue darken-3 headers">
            <div className="row ">
            <div className="col s3 white-text  ">
            <h6>FIR ID</h6>
            </div>
            <div className="col s3 white-text ">
            <h6>Accused Aadhar Number</h6>
            </div>
            <div className="col s3 white-text ">
            <h6>FIR on Blockchain</h6>
            </div>
            <div className="col s3 white-text ">
            <h6>Created Timestamp</h6>
            </div>
            </div>
            </div>
            <CaseList/>
            </div>
            </div>

            )
    }
}

export default PoliceHome;