import React, { useEffect, useState } from 'react'

function Form(props) {
    console.log('props',props)
    const [degree,setDegeree]=useState(70)
    const Bstyle={
        border:"solid 3px red",
        height:"200px",
        width:'500px',
    display:'flex',
    justifyContent:'center',
    flexDirection: 'column'

    }
    useEffect(()=>{
        document.title=`${degree} is currently in`
        
    })

    function changeFun(event){
        console.log('clicked degree ',event.target.name)
        const even=event.target.name;
        even === 'inc' ? setDegeree(degree + 1) :setDegeree(degree - 1);

    }
  return (
    <div style={Bstyle}>
      
   <h3 style={{alignSelf:'center',marginTop:'20px'}}>
    Current Degree in F:{degree}
    </h3> 

<section style={{alignSelf:'center'}}>
    <button onClick={changeFun} name='inc'>Inc degree</button>
</section>

<section style={{alignSelf:'center',marginTop:'20px'}}>
<button onClick={changeFun} name='dec'>Dec. degree</button>

</section>

    </div>
  )
}

export default Form
