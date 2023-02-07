import React, { useState } from 'react'

const Picture = () => {
  const [isActive, setIsActive] = useState(false)

  let bgClassname = 'background'
  let imgClassname = 'picture'

  isActive ? imgClassname += ' picture--active' : bgClassname += ' background--active'
  

  return (
    <div className={bgClassname} onClick={() => setIsActive(false)}>
      <img
        onClick={(e) => {e.stopPropagation(); setIsActive(true)}}
        className={imgClassname}
        src="https://i.imgur.com/5qwVYb1.jpeg"
        alt='Rainbow houses in Kampung Pelangi, Indonesia'
      />
    </div>
  )
}

export default Picture