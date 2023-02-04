import React, { Component } from 'react'

export default class LifecCycleIV extends Component {
    state = {
        windowWidth : window.innerWidth,
        showWidth : true
    }


    watchWidth = () => {
        this.setState({windowWidth : window.innerWidth})
    }

    handleToggle = () => {
        this.setState(prev => ({showWidth : !prev.showWidth}))
    }

    componentDidMount(){
        console.log('mount')
        window.addEventListener('resize', this.watchWidth)
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this.watchWidth)
    }

    render() {
        return (
        <div>
            <button onClick={this.handleToggle}>Toggle Window Tracker</button>
            <h1>{this.state.showWidth && `Window width : ${this.state.windowWidth}px`}</h1>
        </div>
        )
    }
}
