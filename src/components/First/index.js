import React from 'react'
import Second from '../Second'
import "./style.css"

export default function First(props) {
  return (
    <div className="First">
      <h2>First</h2>
      <Second count={props.count} setCount={props.setCount}/>
    </div>
  )
}
