import React from 'react'

export const Skills = () => {
    return (
      <section className="ftco-section ftco-no-pb goto-here" id="resume-section">
      <div className="container" >
        <div className="row">
          <div className="col-md-3">
            <nav id="navi">
              <ul>
              
                <li><a href="#page-3">Skills</a></li>
              </ul>
            </nav>
          </div>
          <div className="col-md-9">
            <div id="page-3" className="page three">
              <h2 className="heading">Skills</h2>
              <div className="row progress-circle mb-5">
                <div className="col-lg-4 mb-4">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">Angular</h2>
                    {/* Progress bar 1 */}
                    <div className="progress mx-auto" data-value={90}>
                      <span className="progress-left">
                        <span className="progress-bar border-primary" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar border-primary" />
                      </span>
                      <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div className="h2 font-weight-bold">90<sup className="small">%</sup></div>
                      </div>
                    </div>
                    {/* END */}
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">React</h2>
                    {/* Progress bar 1 */}
                    <div className="progress mx-auto" data-value={90}>
                      <span className="progress-left">
                        <span className="progress-bar border-primary" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar border-primary" />
                      </span>
                      <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div className="h2 font-weight-bold">90<sup className="small">%</sup></div>
                      </div>
                    </div>
                    {/* END */}
                  </div>
                </div>
                <div className="col-lg-4 mb-4">
                  <div className="bg-white rounded-lg shadow p-4">
                    <h2 className="h5 font-weight-bold text-center mb-4">Javascript</h2>
                    {/* Progress bar 1 */}
                    <div className="progress mx-auto" data-value={90}>
                      <span className="progress-left">
                        <span className="progress-bar border-primary" />
                      </span>
                      <span className="progress-right">
                        <span className="progress-bar border-primary" />
                      </span>
                      <div className="progress-value w-100 h-100 rounded-circle d-flex align-items-center justify-content-center">
                        <div className="h2 font-weight-bold">90<sup className="small">%</sup></div>
                      </div>
                    </div>
                    {/* END */}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ">
                    <h3>NodeJs</h3>
                    <div className="progress">
                      <div className="progress-bar color-5" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ">
                    <h3>Vue.Js</h3>
                    <div className="progress">
                      <div className="progress-bar color-6" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ">
                    <h3>React Native</h3>
                    <div className="progress">
                      <div className="progress-bar color-1" role="progressbar" aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} style={{width: '80%'}}>
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ">
                    <h3>Ionic Framework</h3>
                    <div className="progress">
                      <div className="progress-bar color-2" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ">
                    <h3>HTML5</h3>
                    <div className="progress">
                      <div className="progress-bar color-3" role="progressbar" aria-valuenow={95} aria-valuemin={0} aria-valuemax={100} style={{width: '95%'}}>
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 animate-box">
                  <div className="progress-wrap ">
                    <h3>CSS3</h3>
                    <div className="progress">
                      <div className="progress-bar color-4" role="progressbar" aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    )
}
