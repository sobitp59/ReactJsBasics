import React from "react";


export default class LifeCycleIII extends React.Component{

    state = {
        count : 1,
        character : {}
    }

    handleAdd = () => {
        this.setState(prev => ({
            count : prev.count + 1
        }))
    }

    handleSub = () => {
        this.setState(prev => ({
            count : prev.count === 1 ? + 1 : prev.count - 1
        }))
    }


    getStarwarCharacter(id){
        fetch(`https://swapi.dev/api/people/${id}`)
        .then(res => res.json())
        .then(data => this.setState({character : data}))
    }

    componentDidMount(){
        this.getStarwarCharacter(this.state.count)
    }
    
    componentDidUpdate(prevProps, prevState ){
        if(prevState.count !== this.state.count){
            this.getStarwarCharacter(this.state.count)
        }
    }

    render(){
        return(
            <>
                <div>
                    <h2>Character Number : #{this.state.count} </h2>
                    <button onClick={this.handleAdd}>+</button>
                    <button onClick={this.handleSub}>-</button>
                    <h1>{this.state.character.name || 'loading...'}</h1>
                </div>
            </>            
        )
    }
}