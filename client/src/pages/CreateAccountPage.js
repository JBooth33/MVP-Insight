import axios from 'axios';
import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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
    userPhone: null
  }

  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { companyName, companyAddress1, companyAddress2, companyCity, companyState, companyZip, companyURL, companyContact, companyContactPhone,
      userFirstName, userLastName, userTitle, userRole, userEmail, userPhone } = this.state;
    const { history } = this.props;

    // post an auth request
    axios.get('/api/auth', {
      companyName,
      companyAddress1,
      companyAddress2,
      companyCity,
      companyState,
      companyZip,
      companyURL,
      companyContact,
      companyContactPhone,
      userFirstName,
      userLastName,
      userTitle,
      userRole,
      userEmail,
      userPhone
    })
    .then(console.log(
      // if the response is successful, update the current user and redirect to the home page
      this.state)
      //history.push('/');
  
    .catch(err => {
      // an error occured, so let's record the error in our state so we can display it in render
      // if the error response status code is 401, it's an invalid username or password.
      // if it's any other status code, there's some other unhandled error so we'll just show
      // the generic message.
      this.setState({
        error: err.response.status === 401 ? 'Please try again or contact us for assistance.' : err.message
      });
    }));

  render() {
    const { error } = this.state;

    return (
      <Grid fluid>
        <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleLogin}>
              <h1>Welcome to MVP Insight Access Request Form</h1>
              <h4> All fields marked with and * are required.</h4>
              {error &&
                <div>
                  {error}
                </div>
              }
              <div>
                <TextField
                  name="companyName"
                  hintText="*Company Name *"
                  floatingLabelText="*Company Name"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="companyAddress1"
                  hintText="*Company Address Line 1"
                  floatingLabelText="*Company Address Line 1"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="companyAddress2"
                  hintText="Company Address Line 2"
                  floatingLabelText="Company Address Line 2"
                  onChange={this.handleInputChanged}
                />
              </div>
              
              <div>
                <TextField
                  name="companyCity"
                  hintText="*City"
                  floatingLabelText="*City"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="companyState"
                  hintText="*State"
                  floatingLabelText="*State"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="companyZip"
                  hintText="*Zip Code (5 digits)"
                  floatingLabelText="*Zip Code (5 digits)"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="companyContact"
                  hintText="Primary Company Contact"
                  floatingLabelText="Primary Company Contact"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="companyContactPhone"
                  hintText="Company Contact Phone"
                  floatingLabelText="Company Contact Phone"
                  onChange={this.handleInputChanged}
                />
                </div>
            </form>
          </Col>
        </Row>

        <Row>
          <Col xs={6} xsOffset={3}>
            <form onSubmit={this.handleLogin}>

              <div>
                <TextField
                  name="userFirstName"
                  hintText="*First Name"
                  floatingLabelText="*First Name"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="userLastName"
                  hintText="*User Last Name"
                  floatingLabelText="*User Last Name"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="userTitle"
                  hintText="Current Title"
                  floatingLabelText="Current Title"
                  onChange={this.handleInputChanged}
                />
              </div>
              
              <div>
                <TextField
                  name="userRole"
                  hintText="*Role with MVP"
                  floatingLabelText="*Role with MVP"
                  onChange={this.handleInputChanged}
                />
              </div>
              
              <div>
                <TextField
                  name="userEmail"
                  hintText="*Company Email Address"
                  floatingLabelText="*Company Email Address"
                  onChange={this.handleInputChanged}
                />
              </div>
              <div>
                <TextField
                  name="userPhone"
                  hintText="*User Phone Number"
                  floatingLabelText="*User Phone Number"
                  onChange={this.handleInputChanged}
                />
                </div>
            </form>
          </Col>
        </Row>
      </Grid>
    );
  }
}}
export default CreateAccountPage;
