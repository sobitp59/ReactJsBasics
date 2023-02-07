import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'

function App() {

  return (
    <div className="App">
      <h1>Devsnest Day 27</h1>
      <p>statement management in react</p>
      <div className='box'>
        <Quiz></Quiz>
      </div>
    </div>
  )
}

export default App
