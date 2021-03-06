import axios from 'axios';
import React from "react";
import "./main.css";
import { update } from '../../services/withUser';

class LoginPage extends Component {
  state = {
    companyId: null,
    username: null,
    password: null
  }
  handleInputChanged = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handleLogin = (event) => {
    event.preventDefault();

    const { companyId, username, password } = this.state;
    const { history } = this.props;

    // post an auth request
    axios.post('/api/auth', {
      companyId,
      username,
      password
    })
    .then(user => {
      // if the response is successful, update the current user and redirect to the home page
      update(user.data);
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

		// Header 
			<header id="header">
				<h1>Welcome to MVP Insight</h1>
				<p>Please provide your login credentials below. All fields are required or select register below to request and account or help to reach us for support. </p>
			</header>
{error &&
    <div>
      {error}
    </div>
  }
		// Signup Form 
			<form id="signup-form" method="post" action="#">
				<input type="email" name="compnayID" id="companyID" placeholder="Company ID" />
                <input type="email" name="username" id="username" placeholder="Email Address" />
                <input type="email" name="password" id="password" placeholder="Password" />
				<input type="submit" value="Sign In" />
			</form>


              <p>or</p>
              
              <p href="/create">Request an INSIGHT account</p>
              <p href="">Contact Support</p>
                
    </body>
    );
  }
}

export default LoginPage;
