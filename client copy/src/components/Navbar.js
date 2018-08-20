import React, { Component } from 'react';
import axios from 'axios';
import "../css/main.css";
import "../css/noscript.css";

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

 
        <a className="logo" href="index.html"><strong>INSIGHT</strong> <span>by MVP</span></a>


        <nav id="nav">
          <ul>
            <li><a href="https://www.mvplogistics.com" className="active" >Home</a></li>
            <li><a href="generic.html">Logout</a></li>
            <li><a href="http://localhost:3000/admin">Admin</a></li>
          </ul>
        </nav>

    </header>
  )
};

export default Navbar;
