import { Link, Outlet, Route, Routes } from 'react-router-dom'
import './App.css'


function App() {

  return (
    // <div className="App">
    //   <h1>Hello World!!</h1>
    // </div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
      </Route> 
    </Routes>
  )
}

function Layout(){
  return(
    <>
      <header>
        <nav className='navlink'>
          <li>
            <Link to='/'>home</Link>
          </li>
          <li>
            <Link to='/dashboard'>dashbord</Link>
          </li>
          <li>
              <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/project'>project</Link>
          </li>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>this is footer!</footer>
    </>
  )
}

function Home(){
  return <h1>this is home!</h1>
}

function Dashboard(){ 
  return <h1>this is dashbord!</h1>
}

function About(){
  return <h1>this is about!</h1>
}

function Project(){
  return <h1>this is project!</h1>
}

export default App
