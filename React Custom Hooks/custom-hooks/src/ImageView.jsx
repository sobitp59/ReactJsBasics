import React, { useRef } from 'react';

const ImageView = () => {

    const imagesRef = useRef(null)
    const index = useRef(0)

    const scrollToIndex = () => {
        const imagesNode = imagesRef.current;
        const images = imagesNode.querySelectorAll('.image');
        index.current = index.current + 1 >= images.length ? 0 : index.current + 1;
        images[index.current].scrollIntoView({
            behavior : 'smooth',
            block : 'nearest',
            inline : 'center'
        })
    }


    return (
    <div>
        <nav>
            <button onClick={scrollToIndex}>Next</button>
        </nav>
        <div>
           <ul ref={imagesRef} className='gallery'>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/200/200"
                alt="Tom"
                />
            </li>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/300/350"
                alt="Maru"
                />
            </li>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/290/200"
                alt="Jellylorum"
                />
            </li>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/400/200"
                alt="Tom"
                />
            </li>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/300/300"
                alt="Maru"
                />
            </li>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/240/200"
                alt="Jellylorum"
                />
            </li>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/210/200"
                alt="Tom"
                />
            </li>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/320/200"
                alt="Maru"
                />
            </li>
            <li className='image'>
                <img
                 
                src="https://placekitten.com/g/230/200"
                alt="Jellylorum"
                />
            </li>
           </ul>
        </div>


    </div>
  )
}

export default ImageView