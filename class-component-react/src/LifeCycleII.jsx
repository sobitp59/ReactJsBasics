import React, { Component } from 'react';

export default class LifeCycleII extends Component {
    state = JSON.parse(localStorage.getItem('formdata')) || {
        firstName : '',
        lastName : '',
        email : '',
        comments : '',
        isFriendly : true,
        employment : '',
        favColor : ''
    }

    handleChange = (e) => {
       
        const {name, value, type, checked} = e.target;
        console.log(name, value, type, checked)
        console.log({[name] : checked })
        type === 'checkbox' ?
            this.setState({
                [name] : checked
        }):
        this.setState({
            [name] : value
        })
    }

    componentDidMount(){
       
    }
    
    componentDidUpdate(){
        localStorage.setItem('formdata', JSON.stringify(this.state))
    }



  render() {
    console.log('render II')
    return (
        <div>
        <form className='form' >
            <input 
                type="text"
                placeholder='First Name'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
            />
            <input 
                type="text"
                placeholder='Last Name'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
            />
            <input 
                type="email" 
                placeholder='Email'
                value={this.state.email}
                onChange={this.handleChange}
            />
            <textarea 
                name="comments"
                placeholder='Enter comments...'
                value={this.state.comments}
                onChange={this.handleChange}
            ></textarea>
            <input 
                type="checkbox"
                name='isFriendly'
                id='isFriendly'
                checked={this.state.isFriendly}
                onChange={this.handleChange} 
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status : </legend>
                <input 
                    type="radio" 
                    name="employment" 
                    id="unemployed"
                    value="unemployed"
                    onChange={this.handleChange}
                    checked={this.state.employment === 'unemployed'}
                    />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
            
                <input 
                    type="radio" 
                    name="employment" 
                    id="part-time"
                    value="part-time"
                    onChange={this.handleChange}
                    checked={this.state.employment === 'part-time'}
                    />
                <label htmlFor="part-time">Part-Time</label>
                <br />
            
                <input 
                    type="radio" 
                    name="employment" 
                    id="full-time"
                    value="full-time"
                    onChange={this.handleChange}
                    checked={this.state.employment === 'full-time'}
                />
                <label htmlFor="full-time">Full-Tme</label>
            
            </fieldset>
            <br />

            <label className="favColor" htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor" 
                    value={this.state.favColor}
                    onChange={this.handleChange}
                    name="favColor"
                >
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>

        </form>
    </div>
    )
  }
}
