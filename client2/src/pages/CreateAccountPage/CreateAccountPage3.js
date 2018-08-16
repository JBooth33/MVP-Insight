import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import API from "../../utils/API";
import "./main.css";
// import RaisedButton from 'material-ui/RaisedButton';
import SubmitButton from '../../components/SubmitButton';

const api = new API();

export default class CreateAccountPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
    companyName: null,
    companyAddress1: null,
    companyAddress2: null,
    companyCity: null,
    companyState: null,
    companyZip: null,
    companyURL: null,
    companyContact: null,
    companyContactPhone: null,
    userFirstName: null,
    userLastName: null,
    userTitle: null,
    userRole: null,
    userEmail: null,
    userPhone: null,
    password: null,
    confirmPassword: null
  }
   handleCompanyChanged = (e) => {

        const companyName = e.target.companyName;
        const companyAddress1 = e.target.companyAddress1;
        const companyAddress2 = e.target.companyAddress2;
        const companyCity = e.target.companyCity;
        const companyState =e.target.actioncompanyState;
        const companyZip= e.target.companyZip;
        const companyURL= e.target.companyURL;
        const companyContact= e.target.companyContact;
        const companyContactPhone = e.target.companyContactPhone;
        const value = e.target.value;

    this.setState({
      [companyName]: value});
  }

  handleUserChanged = (e) => {

        const userFirstName = e.target.userFirstName;
        const userLastName = e.target.userLastName;
        const userTite = e.target.userTitle;
        const userRole = e.target.userRole;
        const userEmail =e.target.userEmail;
        const userPhone= e.target.userPhone;
        const password= e.target.password;
        const confirmPasswordt= e.target.confirmPassword;
        const value = e.target.value;

    this.setState({
      [userFirstName]: value});
  }

  renderCompanyForm() {

    return (
        <body className="is-preload">


			<header id="header">
				<h1>MVP Partner Information</h1>
				<p>Please complete the following information about your company. </p>
			</header>


			<form id="signup-form" method="post" action="#">

				<ul>
        <input type="email" name="compnayName" id="companyName" placeholder="Company Name" />
<br></br>
        <input type="email" name="companyAddress1" id="companyAddress1" placeholder="Company Address" />
 <br></br>
        <input type="email" name="companyAddress2" id="companyAddress2" placeholder="Company Address" />
<br></br>        
        <input type="email" name="companyCity" id="companyCity" placeholder="City" />
<br></br>
        <input type="email" name="companyState" id="companyState" placeholder="State" />
 <br></br>
        <input type="email" name="companyZip" id="companyZip" placeholder="Postal Code" />

<br></br>
        <input type="email" name="companyURL" id="companyURL" placeholder="Company Website (URL)" />
<br></br>
        <input type="email" name="companyContact" id="companyContact" placeholder="Primary Contact" />
 <br></br>
        <input type="email" name="companyContactPhone" id="companyContactPhone" placeholder="Primary Contact Phone Number" />
<br></br>
        <input type="email" name="userFirstName" id="userFirstName" placeholder="First Name" />
 <br></br>
        <input type="email" name="userLastName" id="userLastName" placeholder="Last Name" />
<br></br>        
        <input type="email" name="userTitle" id="userTitle" placeholder="Title" />
<br></br>
        <input type="email" name="userRole" id="userRole" placeholder="Role" />
 <br></br>
        <input type="email" name="userEmail" id="userEmail" placeholder="E-mail Address" />

<br></br>
        <input type="email" name="userPhone" id="userPhone" placeholder="Phone Number" />
<br></br>
        <input type="email" name="password" id="password" placeholder="Password" />
 <br></br>
        <input type="email" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
<br></br>
        <input type="submit" value="Register" />
			  </ul>

      </form>
              
              <p href="">Contact Support</p>
                
    </body>
    );
  }
}

export default CreateAccountPage;


      userFirstName: this.userFirstName,
      userLastName: this.userLastName,
      userTitle: this.userTitle,
      userRole: this.userRole,
      userEmail: this.userEmail,
      userPhone: this.userPhone,
      password: this.password,
      confirmPassword: this.confirmPassword
