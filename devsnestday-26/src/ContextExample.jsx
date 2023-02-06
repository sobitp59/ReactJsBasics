import React, { createContext, useContext, useState } from 'react'



const UserContext = createContext(null)
const ThemeContext = createContext('dark')


const Comp1 = () => {
    return(
        <>
            <h2>comp1</h2>
            <Comp2 />
        </>
    )
}

const Comp2 = () => {
    return(
        <>
            <h2>comp2</h2>
            <Comp3 />
        </>
    )
}

const Comp3 = () => {
    const username = useContext(UserContext)
    const theme = useContext(ThemeContext)
    return(
        <>
            <div style={{width : '350px', margin : 'auto' ,padding: '2px', borderRadius : '20px', background : theme === 'light' ? 'white' : 'black', color : theme === 'light' ? 'black' : 'white'}}>
                <h2>comp3 - {username}</h2>
            </div>
        </>
    )
}

const ContextExample = () => {
    const username = 'Sobit Prasad'
    const [theme, setTheme] = useState('light')
  return (
    <div>
        <h1>PROP DRILLING 🚧</h1>
        ContextExample {username}
        
        <UserContext.Provider value={username}>
            <ThemeContext.Provider value={theme}>
                <Comp1 user={username}/>
            </ThemeContext.Provider>
        </UserContext.Provider>

        <button onClick={() => setTheme(prev => prev === 'light' ? 'dark' : 'light')}>Toggle theme</button>
    </div>
  )
}

export default ContextExample