import React, { Component } from 'react'

export default class Greetings extends Component {
    render() {
        const date = new Date()
        let hour = date.getHours()
        let timeOfDay = ''
       
        if(hour >= 0 && hour <= 12){
            timeOfDay = 'Good Morning!'
        }else if(hour > 12 && hour <=  20){
            timeOfDay = 'Good Evening!'
        }else if(hour > 20 && hour <= 24){
            timeOfDay = 'Good Night!'
        }


        return (
        <div>
            <h1>{timeOfDay} to you {this.props.isMale ? 'Sir' : 'Madam'}</h1>
        </div>
        )
  }
}
