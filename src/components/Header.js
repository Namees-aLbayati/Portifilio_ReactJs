import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HomeDetails from '../components/HomeDeatils'
import event from '../assets/images/movie.png'
import { useState } from 'react';
import '../assets/style.css'
import About from './About';
import Footer from './Footer';
function Header() {
  
    const [activeComponent, setActiveComponent] = useState(null);

  
  return (
    <>
    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" >
    <a className="w3-bar-item w3-button w3-padding-large " onClick={()=>setActiveComponent("Home")}>
      <i className="fa fa-home w3-xxlarge"></i>
      <p>PROFILE</p>
    </a>

    <a  className="w3-bar-item w3-button w3-padding-large " onClick={()=>setActiveComponent('About')}>
      <i className="fa fa-user w3-xxlarge"></i>
      <p>Projects</p>
    </a>
    <a href="#photos" className="w3-bar-item w3-button w3-padding-large ">
      <i class="fa fa-eye w3-xxlarge"></i>
      <p>RESUME</p>
    </a>
    <a href="#contact" className="w3-bar-item w3-button w3-padding-large">
      <i className="fa fa-envelope w3-xxlarge"></i>
      <p>CONTACT</p>
    </a>
  </nav>
  <div className="w3-padding-large" >
    {activeComponent==='Home' && <HomeDetails/>}
    {activeComponent=== 'About' && <About/>}
<Footer/>
    </div>

  </>
  );
}

export default Header;