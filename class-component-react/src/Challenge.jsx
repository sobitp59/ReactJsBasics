// import React from 'react'

// export default function Challenge() {
//     const [count, setCount] = React.useState(0)

//   return (
//     <div>
//         <h2>Value : {count}</h2>
//         <button onClick={() => setCount(prev => prev + 1)}>+</button>
//         <button onClick={() => setCount(prev => prev - 1)}>-</button>
//     </div>
//   )
// }

// CONVERT TO CLASS BASED COMPONENT
import React from "react";

export default class Challenge extends React.Component {
    // ✨ NEWER VS OLDER SYNTAX
    
    // state = {
    //     count : 0
    // }
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    
    // handleAdd = () => {
    //     this.setState(prevCount => (
    //         {count : prevCount.count + 1}
    //     ))
    // }
    handleAdd(){
        this.setState(prevCount => (
            {count : prevCount.count + 1}
        ))
    }
    
    // handleSub = () => {
    //     this.setState(prevCount => (
    //         {count : prevCount.count - 1}
    //     ))
    // }
    handleSub(){
        this.setState(prevCount => (
            {count : prevCount.count - 1}
        ))
    }

    render(){
        return(
            <div>
                <h2>Value : {this.state.count}</h2>
                <button onClick={(this.handleAdd).bind(this)}>+</button>
                <button onClick={(this.handleSub).bind(this)}>-</button>
            </div>
        )
    }
}