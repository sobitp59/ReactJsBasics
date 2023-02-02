import React, { memo, useEffect, useState } from 'react'

const Memoization = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    console.log('Parent rendering!')
  
    return (
        <>
            <h2>🎉 Memoization Example</h2>
            <form>
                <fieldset>
                    <input type="text" placeholder='first name' onChange={(e) => setFirstName(e.target.value)}/>
                    <input type="text" placeholder='last name' onChange={(e) => setLastName(e.target.value)}/>
                </fieldset>
            </form>
            <Greeting firstname={firstName} />
            {/* <h3>{lastName}</h3> */}
        </>
    )
}

export default Memoization

const Greeting = memo(({firstname}) => {

    console.log('Child Rendering')
    return(
        <>
            <h3>🐱‍💻 Hello, {firstname}</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis cumque est repellat quasi cupiditate similique porro aut ad ipsam numquam.</p>
        </>
    )
})