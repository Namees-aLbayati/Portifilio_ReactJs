import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Projects from "./components/Projects";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import PDFViewer from "./components/Resume";
function App(){

return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={    <Header/>
}/>
    <Route path='/project' element={    <Projects/>
}/>
   <Route path='/resume' element={<PDFViewer/>
}/>
</Routes>
  </BrowserRouter>

)

}


export default App;