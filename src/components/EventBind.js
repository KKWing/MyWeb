import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super(props)

        this.state = {
            message: 'Hello'
        }

        //React suggest 3.this.clickHandler = this.clickHandler.bind(this)
    }

    /* clickHandler(){
         this.setState({
            message: 'Goodbye!'
        }) 
        console.log(this)
    } */

    clickHandler = () => {
        this.setState({
            message: 'Goodbye!'
        }) 
    }

  render() {
    return (
      <div>
          <div>{this.state.message}</div>
        {/*Not use  1. <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*easy way 2. <button onClick={ () => this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
