import React,{useContext} from 'react'
import {CountContext} from "../../utils/CountContext"
import "./style.css"
import Fifth from "../Fifth"
export default function Fourth() {
  const [{count}] = useContext(CountContext)
  return (
    <div className="Fourth">
      <h2>Fourth count:{count}</h2>
      <Fifth/>
    </div>
  )
}
