import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Projects from "./components/Projects";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Resume from "./components/Resume";
function App(){
  const dispatch=useDispatch()
const get=useSelector(state=>state);
console.log('returned from state',get)
function handlebtn(event){
console.log('click',event.target.name)
if(event.target.name==='Inc'){
  dispatch({
    type:'Inc'
  })
}else{
  dispatch({
    type:'Dec'
  })
}


}
return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={    <Header/>
}/>
    <Route path='/project' element={    <Projects/>
}/>
   <Route path='/resume' element={    <Resume/>
}/>
</Routes>
  </BrowserRouter>
)

}


export default App;