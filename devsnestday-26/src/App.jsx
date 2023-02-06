import './App.css'
import ErrorBoundary from './ErrorBoundary'
import TodoApp from './usereducer/TodoApp'
import UseReducerExI from './usereducer/UseReducerExI'

function App() {

  return (
    <div className="App">
      <h1>error boundaries, todo, usereducer, usecontext</h1>
      <div className='box'>
          <h2>Error Boundaries</h2>
          <ErrorBoundary/>
      </div>
      <div className='box'>
        <UseReducerExI />
        <TodoApp />
      </div>
    </div>
  )
}

export default App
