import { useEffect, useRef, useState } from 'react'
import './App.css'

import ImageView from './ImageView'

function App() {

  
  // counter example
  const ref = useRef(0) 
  const handleClick = () => {
    ref.current += 1
    alert(`You have clicked ${ref.current} times`)
  }

  // input example
  const refInput = useRef(0)
  const [countRender, setCountRender] = useState(0)
  const [inputText, setInputText] = useState('')
  console.log('I rendered')
  const handleInputChange = (e) => {
    setInputText(e.target.value)
    refInput.current += 1
    setCountRender((prev) => prev+=1)
  }


  // focus example
  const focusref = useRef(null)
  const handleFocusInput = () => {
    focusref.current.focus()
  }


  // stopwatch example

  const [seconds, setSeconds] = useState(0)
  const timeInterval = useRef(null)

  const handleStart = () => {

    timeInterval.current = setInterval(() => {
      setSeconds( sec => sec + 1)
    }, 1000)

  }

  const handleStop = () => {
    clearInterval(timeInterval.current)
    timeInterval.current = 0
  }

  const handleReset = () => {
    clearInterval(timeInterval.current)
    timeInterval.current = 0
    setSeconds(0)
  }
  
  useEffect(() => {
    return () => clearInterval(timeInterval.current)
  }, [])

  return (
    <div className="App">
      <h1>day 24: useRef Hook</h1>
      <button onClick={handleClick}>Click</button>

      <div>
        <h1>Render Example</h1>
          <input
            type="text"
            placeholder='enter text'
            onChange={handleInputChange}
            style={{padding : '10px', borderRadius : '10px'}}
          />
          <p>Renders : {refInput.current}</p>
          <p>render : {countRender}</p>
          <p>Input :  {inputText}</p>
      </div>

      <div>
        <h1>Focus Example</h1>
        <input
          ref={focusref} 
          type="text"
          placeholder='input focus'
          style={{padding : '10px', borderRadius : '10px'}}
        />
        <button onClick={handleFocusInput}>Focus Input</button>
      </div>

      <div>
          <h1>Stopwatch Example</h1>
          <h3>Time passed - {seconds}s</h3>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
          <button onClick={handleReset}>Reset</button>
      </div>


      <ImageView />

    </div>
  )
}

export default App
