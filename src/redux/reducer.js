const counterReducer=(state={name:"namees",count:0},action)=>{
switch(action.type){
    case "Inc":
        console.log('log inc',state)

    return {...state,count:state.count+1}
    case "Dec":
        console.log('log dec',state)

        return {...state,count:state.count-1}
        default:
            return {state}
}
}

export default counterReducer;