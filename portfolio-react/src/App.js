import {useEffect} from "react"
import {Navbar} from  './components/navbar'
import {Intro} from  './components/intro'
import {Header} from  './components/header'
import {About} from  './components/about'
import {Skills} from  './components/skills'
import {Service} from  './components/service'
import { Projects } from './components/projects'
import { Contactme } from './components/contactme'
import  ProjectC  from './components/projectD'
import ProjectDetails from './components/projectDetails'

import Aos from "aos"

import './App.css';
import './css/animate.css';
import './css/flaticon.css';
import './css/icomoon.css';
import './css/ionicons.css';
import './css/magnific-popup.css';
import './css/open-iconic-bootstrap.css';
import './css/owl-carousel.css';
import './css/owl-theme.css';
// import './css/aos.css';

import './css/style.scss';


const App = () => {

useEffect(() => {
  Aos.init({
    duration: 1200,
  })
  
}, [])

  return (
    <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
    <Navbar />
    {/* <ProjectDetails /> */}
    <Header />
    <Intro />
    <About />
    <Skills data-aos="fade-up" />
    <Service />
    <ProjectC />
    <Contactme data-aos="fade-up" />

    </div>
  );
}

export default App;
