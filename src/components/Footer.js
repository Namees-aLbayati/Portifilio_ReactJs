import React from 'react'

function Footer() {
    const iconStyle = {
        fontSize: '2em', 
        color: 'white',
        marginLeft:"6px" ,
    
      };
  return (
    <footer className="footer">
    <div className="container" style={{display:"flex",justifyContent:"space-between",marginLeft:"90px",padding:"10px"}}>


    <section>
          {/* LinkedIn icon with a link */}
          <a href="https://www.linkedin.com/in/namees-albayate-604005227/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin" style={iconStyle}></i>
             
          </a>
        </section>
        <section>
          {/* LinkedIn icon with a link */}
          <a href="tel:+17372887235" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-phone" style={iconStyle}></i>
             
          </a>
        </section>
        <section>
          {/* GitHub icon with a link */}
          <a href="https://github.com/Namees-aLbayati" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" style={iconStyle}></i>
          </a>
        </section>
        <section>
          {/* Facebook icon with a link */}
          <a href='mailto:nameessaladdin@gmail.com' target="_blank" rel="noopener noreferrer">
            <i className="fab fa-g" style={iconStyle}></i>
          </a>
        </section>
    </div>
  </footer>
  )
}

export default Footer
