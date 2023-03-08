import React,{useContext} from 'react'
import {CountContext} from "../../utils/CountContext"
import Third from '../Third'
import "./style.css"

export default function Second() {
  const [{count,name}] = useContext(CountContext)
  return (
    <div className="Second">
      <h2>Second count:{count} name:{name}</h2>
      <Third />
    </div>
  )
}
