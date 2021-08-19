import React, { useEffect } from 'react'
import Aos from "aos"


export const Contactme = () => {

  useEffect(() => {
    Aos.init({
      duration: 1200,
    })
    
  }, [])
    return (
      <section className="ftco-section contact-section ftco-no-pb" data-aos="fade-up" id="contact-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ">
            <h1 className="big big-2">Contact</h1>
            <h2 className="mb-4">Contact Me</h2>
            <p>
              I love being part of new cultures and teams and would love to become a part of yours. I am always looking for new and exciting opportunities that will allow me to further excel with my work and to help the employer or client achieve every single of their goals. Let’s talk sometime?
            </p>
            <div>
              <p><a href="mailto:saadsufyan.work@gmail.com" target="_blank">saadsufyan.work@gmail.com</a></p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-12 mb-4 text-center">
            <div id="pph-hireme" />
          </div>
        </div>
        {/* <div class="row d-flex contact-info mb-5">
        <div class="col-md-6 col-lg-4 d-flex ">
          <div class="align-self-stretch box text-center p-4 shadow">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-share2"></span>
            </div>
            <div>
                <h3 class="mb-4">Reach me out</h3>
                <a href="https://www.linkedin.com/in/saadsufyan/" target="_blank"> <span class="icon-linkedin-square"></span> </a>
                <a href="https://github.com/saadsufyan" target="_blank"> <span class="icon-github-square"></span> </a>
                <a href="https://bitbucket.org/saadsufyan1/" target="_blank"> <span class="icon-bitbucket"></span> </a>
                <a href="skype:saad.sufyan1"> <span class="icon-skype" target="_blank"></span> </a>
                <a href="https://www.instagram.com/saad.sufyan.1/" target="_blank"> <span class="icon-instagram"></span> </a>
                <a href="https://www.twitter.com/saadsufyan/" target="_blank"> <span class="icon-twitter-square"></span> </a>
                </div>
                </div>
        </div>
        <div class="col-md-6 col-lg-4 d-flex ">
          <div class="align-self-stretch box text-center p-4 shadow">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-phone2"></span>
            </div>
            <div>
                    <h3 class="mb-4">Contact Number</h3>
                    <p><a href="tel://+923472025817">+ 92347 20258 17</a></p>
                  </div>
                </div>
        </div>
        <div class="col-md-12 col-lg-12 d-flex ">
          <div class="align-self-stretch box text-center p-4 shadow">
            <div class="icon d-flex align-items-center justify-content-center">
              <span class="icon-paper-plane"></span>
            </div>
            <div>
                    <h3 class="mb-4">Email Address</h3>
                    <p><a href="mailto:saadsufyan.work@gmail.com" target="_blank">saadsufyan.work@gmail.com</a></p>
                </div>
                </div>
        </div>
      </div> */}
      </div>
    </section>

    )
}
