import React ,{useState,createContext,useRef, useContext,useEffect}from "react";
import Display from './components/Display'

 export const UserContext=createContext()

export default function App() {
  const firstNameInput=useRef();
  const lastNameInput=useRef();
const [names,setNames]=useState([])
const [count,setCount]=useState(0)
  const[user,setUser]=useState([
    {
      name:'namees',
      age:12
    },
    {
      name:'layth',
      age:22
    }
  ])
  const testCls={
    position: "relative",
    width: "400px",
    height: "200px",
    left:"200px",
    top:"30px",
  }
  const buttonCls={
    border:"solid 5px red",
    height:'50px',
    width:"300px",
    color:'blue'
  }


  useEffect(() => {
if(names.length!==0){
  setCount((count) => count+1);

}else{
  setCount(0)
}
   
  },[names]);


  function sendData(){
    const fi= firstNameInput.current.value;
    const la=lastNameInput.current.value
    setNames(()=>  [...names,[fi,la]]);
    firstNameInput.current.value="";
    lastNameInput.current.value="";
console.log('names',names)
  }

return (
  <>
  <h1>Hello {count}</h1>

<ol>Names added:
  <UserContext.Provider value={names}>
<Display/>
  </UserContext.Provider>
</ol>
  <div>
  <label>Add First Name</label>
  <input type='text' ref={firstNameInput} ></input>
  <label>Add Last Name</label>
  <input type='text' ref={lastNameInput}></input>
  </div>

  <div style={testCls}>
  <button type='button' style={buttonCls} onClick={sendData} >add new Name</button>

  </div>
  </>

)

}


