import React from "react";
import Hello from "./components/Hello";
let prop={name:'ali',age:29}
function App(){
    return (
     <Hello prop={prop}/>

    )
        
}
export default App;