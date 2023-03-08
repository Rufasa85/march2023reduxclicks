import React from 'react'
import Fourth from '../Fourth'
import "./style.css"

export default function Third(props) {
  const resetCount = e=>{
    props.setCount(0);
  }
  return (
    <div className="Third">
      <h2>Third</h2>
      <button onClick={resetCount}>Reset count</button>
      <Fourth count={props.count} setCount={props.setCount}/>
    </div>
  )
}
