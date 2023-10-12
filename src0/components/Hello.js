import React from "react";
let name='namees mohammed salah';
const numbers = [1, 2, 3, 4, 5];

function Hello(prop){

console.log('prop',prop)
return (
    <>
        <h1>hello this  {name.split(" ")[0]} </h1>
        <p>{Math.floor(Math.random()*199)+3}</p>
     <ul>
     {numbers.map((data)=>
           <li key={data}>{data}</li>
        )}
     </ul>
      
    </>
)

}
export default Hello


