import React, { Component } from 'react'

export class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin: false
      }
    }
    

  render() {

    return this.state.isLoggedin && <div>Welcome Vishwas</div>

    /*return(
        this.state.isLoggedin ?(
        <div>Welcome Vishwas</div> ):(
        <div>Welcome Guest</div>)
    )

     let message
    if (this.state.isLoggedin){
        message = <div>Welcome Vishwas</div>
    }else{
        message = <div>Welcome Guest</div>
    } 

    return <div>{message}</div>
    /

      /* if(this.state.isLoggedin){
          return(
              <div>
                  Welcome Vishwas
              </div>
          )
      }else{
          return(
              <div>
                  Welcome Guest!
              </div>
          )
      } 
    return (
      <div>
        <div>Welcome Vishwas!</div>
        <div>Welcome Guest!</div>
      </div>
    )*/
  }
}

export default UserGreeting
