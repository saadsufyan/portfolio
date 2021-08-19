import React from 'react'

export const Intro = () => {
    return (
        <section className="ftco-about img ftco-section ftco-no-pt ftco-no-pb" id="qoute">
        <div className="container">
          <div className="row d-flex no-gutters">
            <div className="col-md-6 col-lg-6 d-flex">
              <div className="img-about img d-flex align-items-stretch" style={{padding: '50px'}}>
                <div className="overlay" />
                <div className="img d-flex align-self-stretch align-items-center" style={{
               backgroundImage: "url(" + require("../assets/images/apple.png").default + ")",
              // backgroundImage: `url("../assets/images/apple.png")`
                 backgroundSize: 'contain'
                  }}>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 pl-md-5 py-5">
              <div className="wpb_wrapper">
                <div className="slider-text">
                  <h1 style={{fontSize: '50px'}}>
                    Easier to Display thoughts Visually:
                  </h1>
                </div>
                <div className="vc_custom_heading vc_custom_heading_32">
                  <p style={{fontSize: 16, lineHeight: '1.6', textAlign: 'left'}} className="heading-tag ">
                    <span className="hilight">I have now come to believe firmly in what Steve Job’s had already known half a century ago. During the course of my career, I have seen it over and over again, that people prefer to be shown rather than being asked. Client requirements, project scope and periodic check-ins notwithstanding, if you continuously ask them at each step of the way if they wanted a Honda or a Ferrari, the answer would always be: ‘well, a Ferrari for the price of Honda ofcourse!‘
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    )
}
