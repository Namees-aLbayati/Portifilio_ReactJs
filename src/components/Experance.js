import React from 'react';

function Experience() {
  const experiences = [
    {
      title: 'Full Stack WEB Developer (MERN)',
      company: 'AtBay',
      location: 'Remote',
      date: 'January 2022 - June 2023',
      role: 'Involved in various phases of Software Development Life Cycle (SDLC) of the application...',
       responsibilities : [
        'Involved in various phases of Software Development Life Cycle (SDLC) of the application like Requirement gathering, Design, Analysis, and Code development.',
        'Responsible for creating efficient design and developing User Interaction screens using HTML5, CSS3, JavaScript, jQuery AJAX, and JSON.',
        'Involved in developing different modules using React, Redux, HTML5, CSS3, Bootstrap, React-Bootstrap, JavaScript, Express.js, RESTful API.',
        'Developed various screens for the front end using React JS and used various predefined modules from NPM (Node Package Manager) and Redux library.',
        'Utilized React to build high-quality, scalable, and reusable components like multi-field form elements and background file uploads. Used React, Redux, and React-Router for app routing.',
        'Used HTML5, CSS3, React JS as the front-end tools to build module pages that communicate with back-end API with RESTful API, Node.js, Express.js, and Mongoose.',
        'Worked on React-AJAX to exchange data with the server and updating parts of online-chart page without reloading the page.',
        'Utilized React Router to reduce render function complexity and improve code base scalability.',
        'Designed the REST API in Node.js for the client to consume, used Express.js framework on Node.js for quick development.',
        'Implemented UI mock-ups, integrating third-party React libraries, and handling/creating Redux store data.',
        'Used React library for the logical implementation part at the client side for all the modules.',
        'Created Responsive Web Design using Bootstrap grid structure and CSS Media Queries, optimized CSS file using processor SASS.',
        'Separate production and development resources with API key handling techniques.',
        'Analyze and resolve conflicts related to merging of source code for GIT.'
      ]
      
    },
    {
      title: 'Full Stack WEB Developer',
      company: 'Cyber Code Tech',
      location: 'Baghdad, Iraq',
      date: 'September 2019 - September 2021',
      role: 'Involved in various phases of Software Development Life Cycle (SDLC) of the application...',

      responsibilities: [
            'Leveraged React JS resources for all data access, encapsulating URLs and standardizing data access interfaces.',
            'Maintaining Parent and Child elements by using State and Props in React JS.',
            'React and Functional Driven Javascript expert in SPAs, UI Components, Mobile web, and Performance Optimization.',
            'Skilled in leading frameworks like React JS to build high-quality, scalable, and reusable components and Front-end solutions.',
            'The front-end uses HTML5, CSS3, React JS, jQuery, and Bootstrap to build a single-page web app that communicates with the back-end via RESTful API.',
            'Responsible for implementing UI mockups, integrating third-party React libraries, and handling/creating Redux store data.',
            'The back-end uses Node JS, Express JS, MongoDB, and Mongoose, comprising the complete MERN Stack to provide RESTful API.',
            'Worked with Gulp, Node Package Manager, MongoDB, and used React JS library functions for the logical implementation part at the client side for all the application.',
            'Implemented generating the verification hash code using Node JS and added user validations and user permissions by using Node JS.',
            'Created React JS for reusable components (multi-field form elements), background file uploads.',
            'Implemented React JS Controllers to maintain each view\'s data.',
            'Architected and Developed Large Scale Javascript Application with React JS.'
         
          
      ],
    },{
        title: 'Full Stack WEB Developer (MERN)',
      company: 'Freelance MERN Developer',
      location: 'Remote',
      date: 'December 2021 - June 2023',
      role: 'Implementing all phases of Software Development Life Cycle (SDLC) of the application.',
      responsibilities:[
            'Leveraged React JS for efficient data access, ensuring standardized data access interfaces.',
            'Maintained Parent and Child components by utilizing State and Props in React JS.',
            'Demonstrated expertise in Functional Driven JavaScript, specializing in Single Page Applications (SPAs), UI Components, Mobile web, and Performance Optimization.',
            'Utilized React JS to lead the development of high-quality, scalable, and reusable components and front-end solutions.',
            'Developed single-page web applications using HTML5, CSS3, React JS, jQuery, and Bootstrap to communicate with back-end systems through RESTful APIs.',
            'Implemented UI mockups, integrated third-party React libraries, and managed Redux store data.',
            'Designed and developed the back-end using Node JS, Express JS, MongoDB, and Mongoose, effectively creating the complete MERN Stack to provide RESTful APIs.',
            'Worked with tools like Gulp, Node Package Manager, and MongoDB, leveraging React JS library functions for logical client-side implementation.',
            'Implemented the generation of verification hash codes using Node JS and incorporated user validations and permissions.',
            'Created reusable React JS components, including multi-field form elements and background file uploads.',
            'Developed and maintained React JS Controllers to manage data for each view.',
            'Led the architecture and development of Large Scale JavaScript Applications using React JS.'
          
          
      ]
    }
  ];

  return (
    <>
    <div className="portfolio  "  >

      {experiences.map((experience, index) => (
        <div key={index} className="experience box ">
          <h2>{experience.title}</h2>
          <p className="company">{experience.company} - {experience.location}</p>
          <p className="date">{experience.date}</p>
          <p className="role"><strong>Role:</strong> {experience.role}</p>
          <p className="responsibilities ">
            <strong>Responsibilities:</strong>
            <ul>
              {experience.responsibilities.map((responsibility, rIndex) => (
                <li key={rIndex}>{responsibility}</li>
              ))}
            </ul>
          </p>
        </div>
      ))}
    </div>
    </>

  );
}

export default Experience;
