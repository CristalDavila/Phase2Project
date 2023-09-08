import React, { Component } from 'react';

// I included a photos section to include something fun to navigate to and look at while
// demonstrating that my routes work. here the photos are uploaded directly
// to the file rather than being retreived from the server. In the future I would include a
//  sub-section on my db.json, as I did for Contact info. 


class Photos extends Component {
    render() {
      return (
          <div>
            <h2>Photos</h2>
            <img src="./assets/waterliliesphoto.jpg"/>
            <img src="./assets/clunyphoto.jpg"/>
            <img src="./assets/musesphoto.jpg"/>
            <img src="./assets/sacrecoeur.jpg"/>
            <img src="./assets/psychephoto.jpg"/>
            <img src="./assets/saintdenisphoto.jpg"/>
          </div>
      );
    }
  }
  
  

export default Photos