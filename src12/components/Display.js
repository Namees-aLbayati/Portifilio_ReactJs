import React,{useContext} from 'react'
import { UserContext } from '../App'
import Form from './Form'
function Display() {
    const names=useContext(UserContext)

    console.log('from display',names)
  return (
    <>
    
    {names.map((name)=>
        <li>{name[0]} {name[1]}</li>
    )}
    <Form names={names}/>
    </>

  )
}

export default Display
