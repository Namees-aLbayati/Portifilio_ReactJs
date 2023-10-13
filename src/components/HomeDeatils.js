import React from 'react'
import pic from '../assets/images/food.png'
import '../assets/style.css'
import namees from '../assets/images/namees.png'
import Experience from './Experance'
import Skills from './Skills'
function HomeDeatils() {
  
  return (
    <section>

<div className='centered-content'>
<h1 style={{textAlign:"center"}}>Namees Salah <br/> Full stack web Developer/Engineer</h1>

<img src={namees} className='img' style={{position:"relative",left:'120px'}}/>


</div>


<div >
<h3 style={{position:"relative",right:"100px",color:"wheat"}}><u>Who I AM?
    </u> </h3>
</div>
<div className='' style={{marginLeft:"100px",color:"gray"}} >
<p >
Full Stack Developer | 3+ Years of MERN Stack Expertise

I am a Full Stack Developer with over three years of hands-on experience specializing in the MERN stack. My skill set and expertise encompass all phases of the Software Development Lifecycle (SDLC), including Analysis, Design, Development, Testing, and Maintenance. I take pride in my ability to create robust, enterprise-level applications, and my proficiency extends to various aspects of front-end and back-end development.
</p>
<br/>


</div>
<h3 style={{position:"relative",right:"100px",color:"wheat"}}> <u>Experience:
    </u></h3>
<div className='justifiy-content-center' style={{position:"relative",left:"100px"}}>

<Experience/>
</div>


    </section>
    

  )
}

export default HomeDeatils
