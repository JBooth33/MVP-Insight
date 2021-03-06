import React from "react";
import axios from 'axios';
import "./main.css";
import "./noscript.css";

import { update } from '../services/withUser';

const Navbar = (props) => {
  const { user } = props;
  const username = user ? user.username : null;
  const handleLogIn = () => {
    props.history.push('/login');
  };
  const handleLogOut = () => {
    axios.delete('/api/auth')
      .then(() => {
        // unsets the currently logged in user. all components wrapped in withUser
        // will be updated with a null user and rerender accordingly
        update(null);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (

    //<!-- Header -->
    <header id="header">

      // -- Logo -->
        <a className="logo" href="index.html"><strong>INSIGHT</strong> <span>by MVP</span></a>

    // -- Nav -->
        <nav id="nav">
          <ul>
            <li><a href="index.html" className="active" 
      showMenuIconButton={false}
      iconElementRight={user ?
        <LoginMenu username={username} onLogOut={handleLogOut} />
        : <LoginButton onClick={handleLogIn} />} >Home</a></li>
            <li><a href="generic.html">Generic</a></li>
            <li><a href="elements.html">Elements</a></li>
          </ul>
        </nav>

    </header>
  )
};

export default withRouter(Navbar);
