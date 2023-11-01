import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import HomeDetails from '../components/HomeDeatils'
import { useMemo, useReducer, useState } from 'react';
import '../assets/style.css'
import Resume from './Resume';
import Footer from './Footer';
import Projects from './Projects';
import { Outlet, Link } from "react-router-dom";
import Contact from './Contact';

function Header() {
    const [activeComponent, setActiveComponent] = useState("Home");
    

  return (
    <>
   
   

    <nav class="w3-sidebar w3-bar-block w3-small w3-hide-small w3-center" >
    <a className="w3-bar-item w3-button w3-padding-large " onClick={()=>setActiveComponent("Home")}>
      <i className="fa fa-home w3-xxlarge"></i>
      <p>About</p>
    </a>
<Link to='/project'>
<a  className="w3-bar-item w3-button w3-padding-large " onClick={()=>setActiveComponent('Projects')}>
      <i className="fa fa-user w3-xxlarge"></i>
      <p>Projects</p>
    </a>
</Link>
  <Link to='/resume'>
    <a className="w3-bar-item w3-button w3-padding-large " onClick={()=>setActiveComponent('Resume')}>
      <i class="fa fa-eye w3-xxlarge"></i>
      <p>RESUME</p>
    </a>
    </Link>

    <a href="#contact" className="w3-bar-item w3-button w3-padding-large" onClick={()=>setActiveComponent('Contact')}>
      <i className="fa fa-envelope w3-xxlarge"></i>
      <p>CONTACT</p>
    </a>
  </nav>
  <div className="w3-padding-large" >
    {activeComponent==='Home' && <HomeDetails/>}
    {activeComponent==='Projects'&&<Projects/>}
    {activeComponent==='Resume'&& <Resume/>}
    {activeComponent=='Contact'&&<Contact/>}
<Footer/>
    </div>

  </>
  );
}

export default Header;