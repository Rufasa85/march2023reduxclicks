import React from 'react'
import Fourth from '../Fourth'
import "./style.css"


export default function Third() {
  const clickHandle = e=>{
    console.log("hiya")
  }
  return (
    <div className="Third">
      <h2>Third</h2>
      <button onClick={clickHandle}>Reset count</button>
      <Fourth />
    </div>
  )
}
