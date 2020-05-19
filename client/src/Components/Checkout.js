import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import MyPDF from './MyPDF';
import PaymentForm from './PaymentForm';
import Review from './Review';
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import ReactDOM from 'react-dom';
import jsPDF from 'jspdf';
import mysql from 'mysql';
var c=0;
var fname="";
var name="";
var addr1="";
var addr2="";
var city="";
var state="";
var phone="";
var email="";
var place="";
var distpoli="";
var dirpol="";
var date="";
var time="";
var nature="";
var section="";
var particular="";
var accussed="";
var aadhar="";
var witness="";
const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Personal Details', 'Occurance Details', 'Offence Information'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

 
 const handleNext = () => {
   c+=1;
  if(c==1) {
    fname=document.getElementById('fname').value;
    name=document.getElementById('name').value;
    addr1=document.getElementById('address1').value;
    addr2=document.getElementById('address2').value;
    city=document.getElementById('city').value;
    state=document.getElementById('state').value;
    phone=document.getElementById('phone').value;
    email=document.getElementById('email').value;
  }
  if(c==2) {
    place=document.getElementById('place').value;
    distpoli=document.getElementById('distpoli').value;
    dirpol=document.getElementById('dirpol').value;
    date=document.getElementById('date').value;
    time=document.getElementById('time').value;
  }
  if(c==3) {
    nature=document.getElementById('nature').value;
    section=document.getElementById('section').value;
    particular=document.getElementById('particular').value;
    accussed=document.getElementById('accussed').value;
    aadhar=document.getElementById('aadhar').value;
    witness=document.getElementById('witness').value;
  }
    var str1 = document.getElementById('btn').value;
    var str2 = "Register & Download FIR";
if(str1==str2) {



        if (window.XMLHttpRequest) {
            // code for IE7+, Firefox, Chrome, Opera, Safari
            var xmlhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
           // var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                window.alert(this.responseText);
                console.log(this.responseText);
            }
        };
        xmlhttp.open("GET","./getaccounttype.php?acc_id=1",true);
        xmlhttp.send();

  var doc = new jsPDF('p','pt');
  doc.setFontType("bold");
  doc.setFontSize(20);
  var y=30;
  doc.text(150,y+20,'FIRST INFORMATION REPORT');
  doc.setFontSize(12);
  doc.setFontType("normal");
  doc.text(20,y+140,'Complainant Personal Information');
  doc.setFontSize(9);
  doc.text(20,y+160,'Name of the Applicant: '.padEnd(60,' ')+name);
  doc.text(20,y+180,'Fathers or Husbands name of the Applicant:    '+fname);
  doc.text(20,y+200,'Address: '.padEnd(68,' ')+addr1);
  doc.text(20,y+220,' '.padEnd(74,' ')+addr2);
  doc.text(20,y+240,'City: '.padEnd(71,' ')+city);
  doc.text(20,y+260,'State: '.padEnd(70,' ')+state);
  doc.text(20,y+280,'Phone: '.padEnd(68,' ')+phone);
  doc.text(20,y+300,'Email ID: '.padEnd(68,' ')+email);
  doc.setFontSize(12);
  doc.text(20,y+320,'Occurance Information');
  doc.setFontSize(9);
  doc.text(20,y+340,'Place of Occurance: '.padEnd(60,' ')+place);
  doc.text(20,y+360,'Distance from Police Station: '.padEnd(57,' ')+distpoli);
  doc.text(20,y+380,'Direction from Police Station: '.padEnd(57,' ')+dirpol);
  doc.text(20,y+400,'Date of Occurance: '.padEnd(60,' ')+date);
  doc.text(20,y+420,'Time of Occurance: '.padEnd(60,' ')+time);
  doc.setFontSize(12);
  doc.text(20,y+440,'Offence Information');
  doc.setFontSize(9);
  doc.text(20,y+460,'Nature of the Offence: '.padEnd(60,' ')+nature);
  doc.text(20,y+480,'Section: '.padEnd(67,' ')+section);
  doc.text(20,y+500,'Particulars of the property: '.padEnd(59,' ')+particular);
  doc.text(20,y+520,'Description of the accused: '.padEnd(57,' ')+accussed);
  doc.text(20,y+540,'Aadhar Number of the accused: '.padEnd(50,' ')+aadhar);
  doc.text(20,y+560,'witness Details: '.padEnd(64,' ')+witness);
  doc.save("generated.pdf");
}

  setActiveStep(activeStep + 1);
  

  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
            Register New FIR
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment>
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                 FIR Registered Successfully, PDF will be Downloaded.
                </Typography>
                <Typography variant="subtitle1">
                  Send the PDF to verifier to Upload this to Block-chain.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                {getStepContent(activeStep)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <Button
                    id="btn"
                    variant="contained"
                    color="primary"
                    value={activeStep === steps.length - 1 ? 'Register & Download FIR' : 'Next'}
                    onClick={handleNext}
                    className={classes.button}
                  >
                      {activeStep === steps.length - 1 ? 'Register & Download FIR' : 'Next'}
                  </Button>
                </div>
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>
      </main>
    </React.Fragment>
  );
}
