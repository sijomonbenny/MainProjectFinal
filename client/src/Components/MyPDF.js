import React,{ PureComponent } from 'react';
import jsPDF from 'jspdf'
export default class pdfGenerator extends PureComponent  {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

jsPdfGenerator = () => {
  var doc = new jsPDF('p','pt');
  doc.text(20,20,'This my first text');
  doc.save("generated.pdf");

}
  render() {
    return(<button onClick = {this.jsPdfGenerator}>Generate PDF</button>);
  }
}