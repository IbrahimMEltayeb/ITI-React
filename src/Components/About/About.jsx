import React from 'react'
import Helmet from 'react-helmet'
import './about.css'

const About = () => {
  return <React.Fragment>

        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@500&family=Oswald:wght@500&family=Roboto+Condensed&display=swap" rel="stylesheet" />
        </Helmet>

    <div id="id1"> 
    <div className="container text-center" >
        <div className="row">
            <div className="col-4">
            <p id="id2">About</p>
            </div>
            <div className="col-8">
                <p id="id3" className="lh-base" >Elon Musk is a visionary entrepreneur and innovator who has founded and led several companies in the fields of aerospace, electric vehicles, social media, and artificial intelligence. He is the founder, CEO, and chief engineer of SpaceX, which aims to make humans a multiplanetary species. He is also the CEO and product architect of Tesla, Inc., which produces electric cars, batteries, and solar panels. He owns and runs Twitter, the popular microblogging platform that he acquired in 2022. He is also involved in various projects such as Neuralink, which develops brain-computer interfaces, and the Boring Company, which builds underground tunnels for transportation.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-4"><button type="button" class="btn btn-secondary">Download Biography file</button></div>
        </div>
    </div>
</div>

  </React.Fragment>
}

export default About