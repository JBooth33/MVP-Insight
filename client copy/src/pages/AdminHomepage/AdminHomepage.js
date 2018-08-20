import React, { Component } from 'react';

import './AdminHomepage.css';


class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.state.showMenu}> Partner <a href="http://localhost:3000/admin/partners"></a> </button>
        <button onClick={this.state.showMenu}> User <a href="http://localhost:3000/admin/users"></a> </button>
        <button onClick={this.state.showMenu}> Role <a href="http://localhost:3000/admin/roles"></a> </button>
      </div>
    );
  }
}

export default Card;




