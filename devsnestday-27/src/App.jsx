import './App.css'
import NestedComp from './components/NestedComp'
import Picture from './components/Picture'
import Quiz from './components/Quiz'
import ShareState from './components/ShareState'
import StateStructure from './components/StateStructure'


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
      <div className='box'>
        <StateStructure></StateStructure>
      </div>
      <div className='box'>
        <NestedComp></NestedComp>
      </div>
      <div className='box'>
        <ShareState></ShareState>
      </div>
    </div>
  )
}

export default App
