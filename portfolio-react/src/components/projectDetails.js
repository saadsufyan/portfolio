import React from 'react'

const ProjectDetails = () => {
    return (
        <section className="ftco-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1 className="mb-3">MobileMode</h1>
              <p>
                <img src="images/mobileMode.png" alt="" className="img-fluid" />
              </p>
              <p>
                Mobile Mode is a mobile comparison app for customers do feasibly select phones by comparing it's features with different phones in the market          </p>
              <div className>
                <p className="mb-0"><a href="https://mobilecomprasion.netlify.app/" target="_blank" className="btn btn-primary py-3 px-5">View Project</a></p>
              </div>
            </div> 
            <div className="col-lg-4 sidebar ">
              <div className="sidebar-box">
                <h3 className="heading-sidebar">Technology Stack</h3>
                <ul className="categories">
                  <li>React</li>
                  <li>Javascript</li>
                  <li>Bootstrap</li>
                  <li>NodeJs</li>
                  <li>Heroku</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="sidebar-box">
                <h3 className="heading-sidebar">Hire Me</h3>
                <div id="pph-hireme" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}

export default ProjectDetails
