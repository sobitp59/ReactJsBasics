
import { useEffect, useState } from 'react';
import Product from './Product';
import Welcome from './Welcome';

function App() {
  const [name, setName] = useState('Mohan');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)


  // EXAMPLE 1
  // useEffect(()=>{
  //     console.log('I am re-rendered ', {name})
  //     return(() => {
  //       console.log('we unmounted')
  //     })
  // },[name])


  // const updateWindowWidth = () => {
  //   setWindowWidth(window.innerWidth)
  // }

  // useEffect(() => {
  //   window.addEventListener('resize', updateWindowWidth)
  //   console.log(`Window Width Resized : ${windowWidth} `)

  //   return(() => {
  //     window.removeEventListener('resize', updateWindowWidth)
  //   })
  // },[windowWidth])


  // EXAMPLE 2
  const [position, setPosition] = useState({x : 0, y : 0})
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handlePosition = (e) => {
      setPosition({x : e.clientX, y : e.clientY})
    } 

    window.addEventListener('pointermove', handlePosition);

    return(() => {
      window.removeEventListener('pointermove', handlePosition)
    })
  },[])


  return (
    <>
      <div 
        className="App"
        style={{
          position: 'absolute',
          backgroundColor: 'purple',
          borderRadius: '50%',
          opacity: 0.6,
          transform: `translate(${position.x}px, ${position.y}px)`,
          pointerEvents: 'none',
          left: -20,
          top: -20,
          width: 40,
          height: 40,
          cursor : 'pointer'
        }}>
      
      </div>

      <button onClick={() => setShow(!show)}>
        <h2>{show ? 'Remove' : 'Show'}</h2>
      </button>
      <hr />
      {show && <Welcome />}
      <Product />
    </>
    
  )
}

export default App
