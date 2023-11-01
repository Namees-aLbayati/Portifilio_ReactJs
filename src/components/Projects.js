import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import '../assets/style.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';


function Projects() {
  const projects=  [{
    "name":"",
    "github":"",
    "image":"black.jpg",
    "description":"",
    "url":"https://github.com/Namees-aLbayati/",
    "tech":""
  },{
    "name":"E-commerce platform",
    "github":"https://github.com/Namees-aLbayati/OnlineShop_MERN",
    "image":"ecommerce.png",
    "description":"",
    "url":"https://github.com/Namees-aLbayati/",
    "tech":"MERN stack App || strip to handel the checkout transection"
  },{
    "name":"Payout System",
    "github":"https://github.com/Namees-aLbayati/Payout-Dash.git",
    "image":"method.png",
    "description":"Auto Student Loan payout Dashboard",
    "url":"https://github.com/Namees-aLbayati/Payout-Dash.git",
    "tech":"HTML | CSS | Bootstrap | JavaScript | Method API "
}, {"name":"Event Planner","github":"https://github.com/Namees-aLbayati/Event_Planner_project2",
"image":"event.png",
"description":"Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse what's happening in your local area."
,"url":"https://obscure-chamber-98928.herokuapp.com/","tech":"JavaScript,CSS,HTML,Bootstrap,HandleBars.js,expressJS,Npm packages"}
, 
{
    "name":"Resource Planner",
    "github":"https://github.com/Namees-aLbayati/Resource-Planner.git",
    "image":"resource.jpg",
    "description":"designed for the manager class in companies or organizations, the one who wants to efficiently manage its human resource and pojects capacity simultaneously",
    "url":"https://github.com/Namees-aLbayati/Payout-Dash.git",
    "tech":"ReactJs,Node,ExpressJs,MongoDB"
  },{
            "name":"Weather dashboard",
            "github":"https://github.com/Namees-aLbayati/WeatherApp",
            "image":"weather.png",
            "description":"Weather dashboard retrieves weather data for cities.",
            "url":"https://sensational-malabi-e89c8a.netlify.app/",
            "tech":"HTML | CSS | Bootstrap | JavaScript | Open Weather One Call API"
        }, {
            "name":"Backend API",
            "github":"https://github.com/Namees-aLbayati/Movie_excer.git",
            "image":"backend.png",
            "description":"working with a secure Movie API To retrive specific data depending on specific input",
            "url":"https://github.com/Namees-aLbayati/Movie_excer.git",
            "tech":"ReactJs|switch-yam-equator.azurewebsites's API "
        },
        {
            "name":"Note Taker",
            "github":"https://github.com/Namees-aLbayati/Progressive-web-App-webpack",
            "image":"notetacker.png",
            "description":" Note Taker is an application used to write, save and delete notes. This is very useful to all types of users like small business owners, so that they can organize their thoughts and keep track of tasks they need to complete.",
            "url":"https://dynamic-strudel-d13cc7.netlify.app/",
            "tech":"Node.js | Express.js | HTML | MYSQL"
        },
        {
            "name":"Recipes Finder",
            "image":"food.png",
            "github":"https://github.com/Namees-aLbayati/Food-Recipies",
            "description":"All food recipes are described in sections: Ingredients and Directions,and more ,Easy as that! Cooking doesn’t have to be complicated and our food recipes app can help you to prepare some awesome meals.with your own choices ",
            "url":"https://helpful-zabaione-ba5ce8.netlify.app/",
            "tech":"HTML | CSS | Bootstrap | JavaScript | Food rec One Call API | local storage"
        }, 
        {
            "name":"Guess Game",
            "github":"https://github.com/Namees-aLbayati/Guess-Game",
            "image":"guess.png",
            "description":"game in which the player has to correctly guess the full word ",
            "url":"https://sensational-maamoul-cf562d.netlify.app/",
            "tech":"HTML,CSS,Bootstrap,javascript,JQuery"
        },    {
            "name":"Password Generator",
            "github":"https://github.com/Namees-aLbayati/Password-Generator-options",
            "image":"password.png",
            "description":"app for generating secure passwords using cryptographically secure pseudo-random number generator. You are given options to choose which characters your password should contain or you can choose your set of a custom symbols.",
            "url":"https://namees-albayati.github.io/Password-Generator-options/",
            "tech":"HTML,CSS,Bootstrap,javascript,JQuery"
        },
        {"name":"Movie Tracker",
        "github":"https://github.com/Namees-aLbayati/MovieLibrary",
        "image":"movie.png",
        "description":"Movie Tracker is an app to get details about latest Movies",
        "url":"https://beautiful-scone-741e17.netlify.app/"
       , "tech":"HTML | CSS | Bootstrap | JavaScript | Movie rec One Call API"
    }    ,
    {"name":"Note Tacker","github":"https://github.com/Namees-aLbayati/Progressive-web-App-webpack","image":"notetacker.png","description":"add your own note","url":"https://dynamic-strudel-d13cc7.netlify.app/","tech":"webpack packages , Indexdb,expressjs"}
    ,
    {"name":"Add Reviews&Questions","github":"https://github.com/Namees-aLbayati/post-reviews-question-Command-EXPRESS","image":"review.png","description":" Add your name,Product's name, and ask or add your reviews,it will be recorded on a produc's company database with in a unique ID","url":"#","tech":"HTML,CSS,HANDLEBARS,Bcrypt,npm packages,expressjs,MongooDB"}
    ,{"name":"Work Day scheduler ","github":"https://github.com/Namees-aLbayati/work-day-schduler1","image":"work.png","description":"Add,Edit,Delete your Day plans ","url":"https://cozy-cendol-50f280.netlify.app/","tech":"HTML,CSS,HANDLEBARS,Bcrypt,npm packages,expressjs,SQL"}
    ]
    
    return (
<div style={{display:'flex',justifyContent:'center'}}>

<Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 1,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="mySwiper"
        style={{marginLeft:'100px', width: "1200px", 
        height: "800px" }}
      >
 


 {projects.map((project,index) => (
  <SwiperSlide key={project.name} style={{
    position: "relative",
    display: "inline-block" }}>
    <a href={`${project.github}`}>
    <img src={require(`../assets/images/${project.image}`)} alt={`Slide ${index}`} style={{width:'75%', objectFit: "cover",marginLeft:'200px'}} />
        {project.tech.length>0 && <div className="overlay-text">

Technologies Used: {project.tech}</div>
}
      
      </a>

  </SwiperSlide>
))}

        
      </Swiper>

</div>

    )
  
}

export default Projects

