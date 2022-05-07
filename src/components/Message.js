import React, { Component } from 'react';
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils';

class Message extends Component{

constructor(){
    super()
    this.state = {
        message:'Welcome visitor'
    }
}

changeMessage(){
    this.setState({
        message: 'Thank you for subscribing'
    })
}

    render(){
        return (
            <div>
                <h1>
                {this.state.message}
                </h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
            )
    }
}

export default Message;