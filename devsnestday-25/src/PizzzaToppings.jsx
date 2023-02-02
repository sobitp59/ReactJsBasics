import React, { useEffect, useState } from 'react';

const pizzaToppings = [
    {id : '1', topping : 'Paneer'},
    {id : '2', topping : 'Cheese'},
    {id : '3', topping : 'Jalapeno'},
    {id : '4', topping : 'Margherita'},
    {id : '5', topping : 'Capsicum'},
]

const shuffle = (originalArray) => {
    const shuffledArray = [...originalArray]
    for (let index = shuffledArray.length - 1; index > 0; index--) {
        let randomIndex = Math.floor(Math.random() * (index+1));
        [shuffledArray[index], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[index]]            
    }
    return shuffledArray
}


const PizzzaToppings = () => {


    const [toppings, setToppings] = useState(pizzaToppings)


    // const removeTopping = (topping) => {
    //     setToppings(toppings.filter((item) => item !== topping))
    // }

    useEffect(() => {
        const interval = setInterval(() => {
            setToppings(shuffle(toppings))
        }, 1500);

        return () => clearInterval(interval)
    })

    return (
        <>
            <div>Rendering - PizzzaToppings</div>
            {/* <ul>
               {toppings.map((item) => (
                    <li key={item.id} >
                        <label htmlFor={item.topping}>{item.topping}</label>
                        <input 
                            name={item.topping} 
                            id={item.id} 
                            value={item.topping}
                            readOnly
                        />
                        <button onClick={() => removeTopping(item)}>X</button>
                    </li>
               ))}
            </ul> */}
            <ul>
               {toppings.map((item) => (
                    <li key={item.id}>
                        <input
                            type='text' 
                            name={item.topping} 
                            id={item.id} 
                            value={item.topping}
                            readOnly
                        />
                    </li>
               ))}
            </ul>
        </>
    
    )
}

export default PizzzaToppings