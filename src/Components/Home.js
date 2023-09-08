import React, { Component } from 'react';

// A general "Home" page with Athena welcoming you to the page. 

class Home extends Component {
  render() {
    return (
        <div>
          <h2>Home</h2>
          <p>Hello friends, welcome to my Portfolio Project.</p>
          <img src="./assets/athenaphoto.jpg"/>
        </div>
    );
  }
}

export default Home;