import React from 'react'
import './skills.css'

const Skills = () => {
  
  return <React.Fragment>

      <div id="skills_id" className="text container">
        <p id="skills_id1" className="text-center">Skills</p>
        <p className="text-center">He is innovative and creative in developing new technologies and products. He has a knack for finding novel solutions and disrupting existing industries. <br /> He has pursued his interests in space exploration, electric vehicles, renewable energy, and artificial intelligence.</p>
      </div>

      <div className="skill_bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <label>Management</label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", height: "30px" }}>
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
              <br />
              <label>Economics</label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", height: "30px" }}>
                <div className="progress-bar" style={{ width: "95%" }}>95%</div>
              </div>
              <br />
              <label>Technology</label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", height: "30px" }}>
                <div className="progress-bar" style={{ width: "98%" }}>98%</div>
              </div>
              <br />
              <label>AI field</label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", height: "30px" }}>
                <div className="progress-bar" style={{ width: "95%" }}>95%</div>
              </div>
              <br />
              <label>Creativity</label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", height: "30px" }}>
                <div className="progress-bar" style={{ width: "100%" }}>100%</div>
              </div>
              <br />
              <label>Meme</label>
              <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: "50%", height: "30px" }}>
                <div className="progress-bar" style={{ width: "98%" }}>98%</div>
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
  </React.Fragment>
  ;
};

export default Skills;



