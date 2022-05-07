import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler('child')}>Greet Parernt</button>
    </div>
  )
}

export default ChildComponent
