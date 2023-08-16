import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './hero.css'
import { Helmet } from 'react-helmet';


const Hero = () => {
  return <React.Fragment>
      
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@500&family=Oswald:wght@500&family=Roboto+Condensed&display=swap" rel="stylesheet" />
      </Helmet>

        <div className="bio">
            <h2 id="bio_id1">Elon Musk</h2>
            <p id="bio_id2">CEO of Tesla and Space X</p>
            <button id="btn1">Learn more</button>
        </div>
  
  </React.Fragment>
}

export default Hero