import React from 'react'
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Helmet } from 'react-helmet';


const Navbar = () => {
    

  return <React.Fragment>

      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@500&family=Oswald:wght@500&family=Roboto+Condensed&display=swap" rel="stylesheet" />
      </Helmet>
      
          <nav id="navbar-example2" className="navbar navbar-dark bg-dark navbar-expand-lg">
        <a className="navbar-brand" href="#d1"><span id='logo'>IRON Man</span></a>
        
        <ul class="navbar-nav me-auto mb-2 mb-lg-0" id='links'>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#d2">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#d3">Skills</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#d4">Projects</a>
        </li>
        </ul>
      </nav>
    </React.Fragment>
    
}

export default Navbar




