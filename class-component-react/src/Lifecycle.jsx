import React, { Component } from 'react'

export class Lifecycle extends Component {
    //        👶           =>       🤵-👨‍👩‍👦-👴      => 💀
    // componentDidMount() => componentDidUpdate() => componentWillUnmount()

    state = {
        characterName : ''
    }

    componentDidMount(){
        
        fetch(`https://swapi.dev/api/people/1`)
        .then(res => res.json())
        .then(data => {
            this.setState({characterName : data})
        })
    }

  render() {
    
    return (
        <>
            <div>
                <h2>##componentDidMount</h2>
                <h2>
                🎉 {this.state.characterName.name}
                </h2>
            </div>

            
        </>
    )
  }
}

export default Lifecycle