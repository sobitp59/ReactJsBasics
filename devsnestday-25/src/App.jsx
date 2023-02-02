import { useState } from 'react'
import './App.css'
import PizzzaToppings from './PizzzaToppings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Day 25 - Renedering Keys, Class Componenet, Memoization</h1>
      <PizzzaToppings />
    </div>
  )
}

export default App
