import React from 'react'
import Third from '../Third'
import "./style.css"

export default function Second(props) {
  return (
    <div className="Second">
      <h2>Second count:{props.count}</h2>
      <Third count={props.count} setCount={props.setCount}/>
    </div>
  )
}
