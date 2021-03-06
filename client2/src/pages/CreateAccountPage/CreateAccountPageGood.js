import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import API from "../../utils/API";
import "./main.css";
// import RaisedButton from 'material-ui/RaisedButton';
import SubmitButton from '../../components/SubmitButton';

 class CreateAccountPage extends Component {
  state = {
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
   handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();
    console.log("Button Clicked");
    //  const { companyName, companyAddress1, companyAddress2, companyCity, companyState, companyZip, companyURL, companyContact, companyContactPhone,
    //   userFirstName, userLastName, userTitle, userRole, userEmail, userPhone, password, confirmPassword } = this.state;
    const { history } = this.props;
     // post an auth request
    API.saveUser({
      companyName: this.companyName,
      companyAddress1: this.companyAddress1,
      companyAddress2: this.companyAddress2,
      companyCity: this.companyCity,
      companyState: this.companyState,
      companyZip: this.companyZip,
      companyURL: this.companyURL,
      companyContact: this.companyContact,
      companyContactPhone: this.companyContactPhone,
      userFirstName: this.userFirstName,
      userLastName: this.userLastName,
      userTitle: this.userTitle,
      userRole: this.userRole,
      userEmail: this.userEmail,
      userPhone: this.userPhone,
      password: this.password,
      confirmPassword: this.confirmPassword
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
     // update(user.data);
      history.push('/');
    })
    .catch(err => {
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
      this.setState({
        error: err.response.status === 401 ? 'Invalid Company Id, Username or Password. Please try again or contact us for assistance.' : err.message
      });
    });
  }
  render() {
    const { error } = this.state;

    return (
        <body className="is-preload">


			<header id="header">
				<h1>Welcome to MVP Insight Access Request Form</h1>
				<p>All fields are required. </p>
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
