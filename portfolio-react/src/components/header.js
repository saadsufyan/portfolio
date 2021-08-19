import React from 'react'
import Typical from 'react-typical'


export const Header = () => {
    return (
        <section className="hero-wrap js-fullheight">
        <div className="overlay" />
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
            <div className="col-lg-8 col-md-6  d-flex align-items-center">
              <div className="text text-center">
                <span className="subheading">Hey! I am</span>
                <h1>Muhammad Saad</h1>
                <h2>I'm a 
                  <br />
                  <Typical
                  className="txt-rotate"
        steps={['Full Stack Developer', 200, 'Mobile App Developer', 200, 'Web Designer',200]}
        loop={Infinity}
        wrapper="span"
      />
                  {/* <span className="txt-rotate">
                  Full Stack Developer
                    </span>   */}

                  {/* <span className="txt-rotate" data-period={2000} data-rotate="[ &quot;Full Stack Developer&quot;, &quot;Mobile App Developer&quot;, &quot;Web Designer&quot; ]" /> */}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    )
}
