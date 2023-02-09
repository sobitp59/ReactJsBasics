import React, { useState } from 'react'
import ShareStateChI from './ShareStateChI'
import ShareStateExII from './ShareStateExII'

const Card = ({title, children, isActive, onShow}) => {
  
  
  return(
    <>
      <h3>{title}</h3>
      {
        isActive ? (
          <>
            <p>{children}</p>
          </>
        ) : (
          <button onClick={onShow}>show</button>
        )
      }
    </>
  )
}

const ShareState = () => {
  const [activeIndex, setIsActiveIndex] = useState(0)
  return (
    <div>
      <h1>neog camp</h1>
      <Card title='About' isActive={activeIndex === 0} onShow={() => setIsActiveIndex(0)}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium vel fuga fugit eaque fugiat iure.
      </Card>
      <Card title='Description' isActive={activeIndex === 1} onShow={() => setIsActiveIndex(1)}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem similique omnis repellat, et mollitia obcaecati non dolorem, odio quae eveniet atque porro, qui distinctio? Asperiores incidunt repellendus placeat ut ipsa quibusdam provident non soluta voluptatibus suscipit? Voluptate odio a, id laboriosam repellendus nihil quae facere. Ducimus sapiente laudantium error ad.
      </Card>

      <ShareStateChI></ShareStateChI>
      <ShareStateExII></ShareStateExII>
    </div>
  )
}

export default ShareState