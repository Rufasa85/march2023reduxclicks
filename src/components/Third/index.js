import React from 'react'
import Fourth from '../Fourth'
import "./style.css"

export default function Third(props) {
  return (
    <div className="Third">
      <h2>Third</h2>
      <button onClick={()=>props.setCount(0)}>Reset count</button>
      <Fourth count={props.count} setCount={props.setCount}/>
    </div>
  )
}
