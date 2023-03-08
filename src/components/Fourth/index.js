import React from 'react'
import "./style.css"
import Fifth from "../Fifth"
export default function Fourth(props) {
  return (
    <div className="Fourth">
      <h2>Fourth count:{props.count}</h2>
      <Fifth count={props.count} setCount={props.setCount}/>
    </div>
  )
}
