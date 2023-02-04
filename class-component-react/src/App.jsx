import React from "react"
import Challenge from "./Challenge"
import ComplexState from "./ComplexState"
import Greetings from "./Greetings"
import Header from "./Header"
import LifecCycleIV from "./LifecCycleIV"
import Lifecycle from "./Lifecycle"
import LifeCycleII from "./LifeCycleII"
import LifeCycleIII from "./LifeCycleIII"
import StateInClass from "./StateInClass"

export default class App extends React.Component {
  render(){
    return(
      <>
        <h1>✨{this.props.type} Component in React</h1>
        
        <div className="example-box">
          <h3>#Example_1</h3>
          <Header username='Sobit' />
          <Greetings isMale={true} />
        </div>

        <div className="example-box">
          <h3>#Example_2</h3>
          <StateInClass />
        </div>

        <div className="example-box">
          <h3>#Challenge</h3>
          <Challenge />
        </div>

        <div className="example-box">
          <h3>#Challenge - Complex State in React</h3>
          <ComplexState />
        </div>


        <div className="example-box">
          <h3>#Lifecycle in React</h3>
          <Lifecycle />
        </div>

        <div className="example-box">
          <h3>#Lifecycle in React II</h3>
          <LifeCycleII />
        </div>

        <div className="example-box">
          <h3>#Lifecycle in React III</h3>
          <LifeCycleIII />
        </div>

        <div className="example-box">
          <h3>#Lifecycle in React IV</h3>
          <LifecCycleIV />
        </div>
      </>
      
    )
  }  
}
