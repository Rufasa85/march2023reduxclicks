import React from 'react'
import "./style.css"

export default function Fifth(props) {
  return (
    <div className="Fifth">
      <h2>Fifth</h2>
      <button onClick={()=>props.setCount(props.count+1)}>Add one</button>
    </div>
  )
}
