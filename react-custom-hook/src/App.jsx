import { useRef, useState } from 'react'
import useCategoryJoke from './useCategoryJoke'

function App() {
  const [category, setCategory] = useState('dev')
  const laugh = useCategoryJoke(category)
  const categoryRef = useRef(null)

  const generateJoke = (e) => {
    e.preventDefault()
    setCategory(categoryRef.current.value)
  }

  return (
    <div className="App">
      <div className='main'>
        <h1>Joke Generator - customHook</h1>
        <p>generate awesome jokes</p>
        <form className='form'>
          <input 
            ref={categoryRef}
            placeholder='enter category'
          />
          <button onClick={generateJoke}>Generate Joke</button>
        </form>
        <h3>{laugh}</h3>
      </div>
        
    </div>
  )
}

export default App
