import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { withUser, update } from './services/withUser';

import AdminHomepage from './pages/AdminHomepage';
import CreateAccountPage from './pages/CreateAccountPage';
import Homepage from './pages/Homepage';
import LoginPage from './pages/LoginPage';
import PartnerList from './pages/PartnerList';
import RequestQuote from './pages/RequestQuote';
import RoleList from './pages/RoleList'
import UserList from './pages/UserList'
import NotFoundPage from './pages/NotFoundPage';

class App extends Component {
  componentDidMount() {
    // this is going to double check that the user is still actually logged in
    // if the app is reloaded. it's possible that we still have a user in sessionStorage
    // but the user's session cookie expired.
    axios.get('/api/auth')
      .then(res => {
        // if we get here, the user's session is still good. we'll update the user
        // to make sure we're using the most recent values just in case
        update(res.data);
      })
      .catch(err => {
        // if we get a 401 response, that means the user is no longer logged in
        if (err.response.status === 401) {
          update(null);
        }
      });
  }
  render() {
    const { user } = this.props;
    return (
      <Router>
        <MuiThemeProvider>
          <Fragment>
            <Navbar
              user={user}
            />
            <Switch>
              <Route exact path="/admin" component={AdminHomepage} />
              <Route exact path="/admin/users" component={UserList} />
              <Route exact path="/admin/partners" component={PartnerList} />
              <Route exact path="/admin/roles" component={RoleList} />
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/create" component={CreateAccountPage} />
              <Route exact path="/request" component={RequestQuote} />
              <Route component={NotFoundPage} />
            </Switch>
            <Footer/>
          </Fragment>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default withUser(App);
