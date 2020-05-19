import React, { Component } from 'react';
import '../CSS/newFIR.css';
import GenericNavbar from './Navbar/GenericNavbar';

import SimpleStorageContract from "../contracts/SimpleStorage.json";
import getWeb3 from "../utils/getWeb3";
import ipfs from '../ipfs';


class NewFIR extends Component
{
    state = {buffer: null, web3: null, accounts: null, contract: null,
        crime_id: '',
        timestamp: '',
        offense_code: '',
        description: '',
        ipfshash:''
    };
    
    constructor(props)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount = async () => {
        try {
          // Get network provider and web3 instance.
          const web3 = await getWeb3();           
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();      
    
          // Get the contract instance.
          const networkId = await web3.eth.net.getId();
          const deployedNetwork = SimpleStorageContract.networks[networkId];
          const instance = new web3.eth.Contract(
            SimpleStorageContract.abi,
            deployedNetwork && deployedNetwork.address,
          );
          console.log(deployedNetwork);    
          console.log(deployedNetwork.address);
           console.log(instance);
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, accounts, contract: instance }, this.runExample);
          this.onGetDate();
        } catch (error) {
          // Catch any errors for any of the above operations.
          alert(
            `Failed to load web3, accounts, or contract. Check console for details.`,
          );
          console.error(error);
        }
      };
    captureFile = (event) => {
    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }
    
    onSubmit(event) {
        const { accounts, contract } = this.state;
        event.preventDefault()
        this.onGetDate();
        ipfs.files.add(this.state.buffer, (error, result) => {
            if(error) 
            {
                console.error(error)
                return
            }
            contract.methods.addCrimeReport(this.state.crime_id, this.state.timestamp, this.state.offense_code, result[0].hash).send({from: accounts[0]});
          console.error('IPFS Hash: '+result[0].hash);
            }) 
        
    }

    onGetDate() {
        var date = new Date();
        var year = date.getFullYear().toString();
        var month = (date.getMonth() + 101).toString().substring(1);
        var day = (date.getDate() + 100).toString().substring(1);
        var hour = (date.getHours() + 100).toString().substring(1); 
        var mins = (date.getMinutes() + 100).toString().substring(1);
        var sec = (date.getSeconds() + 100).toString().substring(1);    
        this.setState({
            timestamp : year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec
        });
        // console.log(year + "-" + month + "-" + day + " " + hour + ":" + mins + ":" + sec);
      }

    render()
    {
        return(
            <div className = "">
                <GenericNavbar/>
                <div className="container">
                <div className="row">
                    <div className="col s6">
                        <div className="card reportCard">
                            <div className="card-title cardTitle2">
                                <h4 className = "cardTitle">New FIR</h4>
                            </div>
                            <div className="card-content">
                                <form onSubmit={this.onSubmit}>
                                    <div className="input-field">
                                        <input type="text" id="caseId" onChange={(evt) => { this.state.crime_id =  evt.target.value; }} required/>
                                        <label htmlFor="email">Case ID</label>
                                    </div>
                                    <div className="input-field">
                                        <input value={this.state.timestamp} type="text" id="timestamp" readOnly onChange={(evt) => { this.state.timestamp =  evt.target.value; }} required/>
                                        {/* <label htmlFor="email">Time Stamp</label> */}
                                    </div>
                                    <div className="input-field">
                                        <input type="text" id="offCode" onChange={(evt) => { this.state.offense_code =  evt.target.value; }} required/>
                                        <label htmlFor="offCode">Accussed Aadhar Number</label>
                                    </div>
  <div className="row">
                    <div className="col-sm-8">
                        <div className="form-group required">
                            <label for="payment">Documents (upload FIR in .pdf format)</label>
                            <input className="form-control" type="file" accept="application/pdf" onChange={this.captureFile}/>
                         </div>
                    </div>   
                </div>
                                    <div className="form-submit center">
                                        <button type="submit" className="dropbtn1" style={{marginTop:"10px"}}>Upload to Blockchain</button>  
                                    </div>
                                    
                                </form> 
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default NewFIR;