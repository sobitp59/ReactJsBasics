import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaUserAstronaut } from 'react-icons/fa';

export default class ComplexState extends React.Component {
    state = {
        firstName : 'John',
        lastName : 'Doe',
        phone : '+9136352623687',
        email : 'johndoe@gmail.com',
        isFavorite : false
    }

    handleFav = () => {
        this.setState((prevState) => ({
            isFavorite : !prevState.isFavorite
        }))
    }

    render(){
        let favIcon = this.state.isFavorite ? <AiFillStar /> : <AiOutlineStar />
        let favColor = this.state.isFavorite ? 'yellow' : 'white'

        return (
          <div className='complexBox'> 
             <h1 style={{fontSize : '70px', color : 'orangered'}}>
                  <FaUserAstronaut />
              </h1>
              <h1 className='fav-button' onClick={this.handleFav} style={{color : favColor}}>
                  {favIcon}
              </h1>
              <h1>{this.state.firstName} {this.state.lastName}</h1>
              <p>{this.state.phone}</p>
              <p>{this.state.email}</p>
          </div>
      
          )
    }
}
