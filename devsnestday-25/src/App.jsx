import { useState } from 'react'
import './App.css'
import Memoization from './Memoization'
import PizzzaToppings from './PizzzaToppings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>Day 25 - Renedering Keys, Class Componenet, Memoization</h1>
      <PizzzaToppings />
      <Memoization />
    </div>
  )
}

export default App
