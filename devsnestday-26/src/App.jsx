import './App.css'
import ErrorBoundary from './ErrorBoundary'

function App() {

  return (
    <div className="App">
      <h1>error boundaries, todo, usereducer, usecontext</h1>
      <div className='box'>
          <h2>Error Boundaries</h2>
          <ErrorBoundary/>
      </div>
    </div>
  )
}

export default App
