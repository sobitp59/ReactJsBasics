import React, { useState } from 'react'

const ShareStateChI = () => {
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }
  return (
    <div>
        <h1>Share State Challenge I</h1>
        <p>These two inputs are independent. Make them stay in sync: editing one input should update the other input with the same text, and vice versa.</p>
        <Input 
            label='First Name'
            value={text}
            onChange={handleChange}
            />
        <Input 
            label='Last Name'
            value={text}
            onChange={handleChange}
        />
    </div>
  )
}


const Input = ({label, value, onChange}) => {
    return (
        <>
            <label>{label}
                {' '}
                <input 
                    type="text"
                    value={value}
                    onChange={onChange}
                />
            </label>
        </>
    )
}

export default ShareStateChI