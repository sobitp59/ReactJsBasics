import React, { useState } from 'react'

const AddTodo = ({onAddTodo}) => {
  const [text, setText] = useState('')
  
    return (
    <div>
        <input 
            type="text" 
            value={text}
            placeholder='Add task...' 
            onChange={(e) => setText(e.target.value)}
        />

        <button onClick={() => {
            onAddTodo(text)
            setText('')
        }}>Add</button>
    </div>
  )
}

export default AddTodo