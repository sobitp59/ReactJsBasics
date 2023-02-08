import React, { useState } from 'react';

const StateStructure = () => {
  return (
    <div>
        <h1>State Structure</h1>
        <PointerMove />
        <Duplication />
    </div>
  )
}

;

function PointerMove() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });
  return (
    <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '50vw',
        height: '50vh',
      }}>
        <h3>Pointer Move</h3>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div>
  )
}


const initialItems = [
    {id : 0, title : 'Naruto Shippuden'},
    {id : 1, title : 'Deathnote'},
    {id : 2, title : 'One Piece'},
    {id : 3, title : 'Demon Slayer'},
    {id : 4, title : 'Attack on Titans'},
]

const Duplication = () => {
    const [items, setItems] = useState(initialItems)
    const [selectedId, setSelectedId] = useState(0)
    const  selectedItem = items.find( item => item.id === selectedId)

    const handleInputChange = (id, e) => {
        console.log(id, e.target.value)
        setItems(items.map(item => {
            if(item.id === id){
               return {
                   ...item,
                   title : e.target.value
            }
            }else{
                return item
            }
        }))
    }

    return (
        <div>
            <h3>Avoid Duplication</h3>
            <h4>Choose your favorite anime</h4>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <input 
                          value={item.title} 
                          onChange={e => {handleInputChange(item.id, e)}}/>
                        <button onClick={() => setSelectedId(item.id)}>Choose</button>
                    </li>
                ))}
            </ul>
            <h2>You picked : {selectedItem.title}</h2>
        </div>
    )
}

export default StateStructure