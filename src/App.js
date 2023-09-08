import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Drawings from "./Components/Drawings"
import Photos from "./Components/Photos"
import './index.css';

//This was where I created the routes, so it followed in my mind that the NavBar functionality 
// should be here too. I'm especially proud of the frog logo. I used Pixlr to remove the background
// oof the image, making it look so much cleaner next to the title.

function App()  {
    return (
      <Router>
        <div>

        <h1 className="navbar-title">
        Cristal's Art Portfolio
          <img
            src="./assets/transparentforg.png"
             className="navbar-image"
             style={{ width: '150px', height: '200px', borderRadius: '1%'  }}
          />
        </h1> 
        
          
          
          <nav className="navbar navbar-expand-lg custom-navbar">
          <ul className="navbar-nav mr-auto">

           <ul><Link to={'/'} className="nav-link"> Home </Link></ul>

           <ul><Link to={'/about'} className="nav-link">About</Link></ul>

           <ul><Link to={'/Drawings'} className="nav-link">Drawings</Link></ul>

           <ul><Link to={'/Photos'} className="nav-link">Photos</Link></ul>

           <ul><Link to={'/contact'} className="nav-link">Contact</Link></ul>

          </ul>

          
        </nav>
          
          <hr />
          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/about' element={<About />} />
              <Route path='/Drawings' element={<Drawings />}/>
              <Route path='/Photos' element={<Photos />}/>

          </Routes>
        </div>
      </Router>
    );
}



export default App;
