import './App.css'
import Picture from './components/Picture'
import Quiz from './components/Quiz'

function App() {

  return (
    <div className="App">
      <h1>Devsnest Day 27</h1>
      <p>statement management in react</p>
      <div className='box'>
        <Quiz></Quiz>
      </div>
      <div className='box'>
        <Picture></Picture>
      </div>
    </div>
  )
}

export default App
