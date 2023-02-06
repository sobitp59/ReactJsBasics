import React, { useReducer } from 'react'




const reducer = (state, action) => {
  if(action.type === 'incrementage'){
    return {
      ...state,
      age : state.age + 1
    }
  }else if(action.type === 'decrementage'){
    return {
      ...state,
      age : state.age - 1
    }
  }else if(action.type === 'changename'){
    return {
      ...state,
      name : action.newname
    }
  }
  throw new Error()
}

const UseReducerExI = () => {
  const [state, dispatch] = useReducer(reducer, {age : 22, name : 'Sobit Prasad'}) 


  

  
const handleInputChange = (e) => {
  dispatch({
    type : 'changename',
    newname : e.target.value
  })
}

  return (
    <div>
        <h3>Hello {state.name}! you are {state.age} years old.</h3>
        <input 
          type="text" 
          placeholder='enter full name'
          onChange={handleInputChange}
        />
        <button onClick={() => {dispatch({type : 'incrementage'})}}>Increment Age</button>
        <button onClick={() => {dispatch({type : 'decrementage'})}}>Decrement Age</button>
    </div>
  )
}

export default UseReducerExI