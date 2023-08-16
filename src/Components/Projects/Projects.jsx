import React from 'react'
import './projects.css'
import Tesla from 'C:/Users/ibrah/Desktop/React task 1/task1/src/assets/images/Tesla.png'
import logoblack from 'C:/Users/ibrah/Desktop/React task 1/task1/src/assets/images/logoblack.png'
import SpaceX from 'C:/Users/ibrah/Desktop/React task 1/task1/src/assets/images/SpaceX.png'
import xai from 'C:/Users/ibrah/Desktop/React task 1/task1/src/assets/images/xai.png'
import Neuralink_Logo from 'C:/Users/ibrah/Desktop/React task 1/task1/src/assets/images/Neuralink_Logo.png'
import solarcity from 'C:/Users/ibrah/Desktop/React task 1/task1/src/assets/images/solarcity.png'

const Projects = () => {
  return <React.Fragment>

<div id="projects_id" className="text container">
        <p id="projects_id1" className="text-center">Projects</p>
        <p className="text-center">He is innovative and creative in developing new technologies and products. He has a knack for finding novel solutions and disrupting existing industries. <br /> He has pursued his interests in space exploration, electric vehicles, renewable energy, and artificial intelligence.</p>
      </div>

      <div id="proj1">
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <img src={Tesla} alt="" height="250px" width="250px" />
            </div>
            <div className="col">
              <img src={logoblack} alt="" height="200px" width="200px" />
            </div>
            <div className="col">
              <img src={Neuralink_Logo} alt="" height="250px" width="300px" />
            </div>
          </div>
        </div>
      </div>

      <div id="proj2">
        <div className="container text-center">
          <div className="row align-items-end">
            <div className="col">
              <img src={SpaceX} alt="" height="290px" width="350px" />
            </div>
            <div className="col">
              <img src={xai} alt="" height="220px" width="220px" />
            </div>
            <div className="col">
              <img src={solarcity} alt="" height="250px" width="400px" />
            </div>
          </div>
        </div>
      </div>
  </React.Fragment>
}

export default Projects