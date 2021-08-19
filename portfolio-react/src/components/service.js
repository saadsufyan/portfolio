import React from 'react'

export const Service = () => {
    return (
      <section className="ftco-section" id="services-section">
      <div className="container-fluid px-md-5">
        <div className="row justify-content-center py-5 mt-5">
          <div className="col-md-12 heading-section text-center ">
            <h1 className="big big-2">Services</h1>
            <h2 className="mb-4">Services</h2>
            <p> I will transform your ideas into robust solutions, helps you to grow your business today, I believe in client satisfaction</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 text-center d-flex ">
            <a href="#" className="services-1 shadow">
              <span className="icon">
                <i className="flaticon-analysis" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Graphic Designing</h3>
                <p className="services-text">
                  Do you have a product idea you want to create, but unsure how? GREAT - I can help you create flawless designs with extreme aesthetic design sense.
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ">
            <a href="#" className="services-1 shadow">
              <span className="icon">
                <i className="flaticon-flasks" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Mobile App Development</h3>
                <p className="services-text">
                  Client-focused, creating strategic mobile solutions that deliver tangible business results. I provide solutions in Android, IOS and hybrid mobile apps. 
                </p>
              </div>
            </a>
          </div>
          <div className="col-md-4 text-center d-flex ">
            <a href="#" className="services-1 shadow">
              <span className="icon">
                <i className="flaticon-ideas" />
              </span>
              <div className="desc">
                <h3 className="mb-5">Web Developement</h3>
                <p className="services-text">
                  I create websites that drive traffic, leads and conversions. 
                  I take great pride in developing webapps using latest technologies to deliver seamless user experience. 
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>

    )
}
