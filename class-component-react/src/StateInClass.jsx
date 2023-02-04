import React from 'react'

export default class StateInClass extends React.Component {
    constructor(){
        super()
        this.state = {
            goOut : 'Yes'
        }

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
       this.setState(prev => ({
            goOut : prev.goOut === 'Yes' ? 'No' : 'Yes'
        })
        )
    }
    render(){
        return (
            <div>
                <h1>Should I go out tonight?</h1>
                <h2>{this.state.goOut}</h2>
                <button onClick={(this.handleClick).bind(this)}>{this.state.goOut}</button>
            </div>
        )
    }
}
