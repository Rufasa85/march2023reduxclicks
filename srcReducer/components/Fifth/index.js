import React,{useContext} from 'react'
import "./style.css"
import { CountContext } from '../../utils/CountContext'
import { INCREMENT_COUNT } from '../../utils/actions'

export default function Fifth() {
  const [state, dispatch] = useContext(CountContext);
  const clickHandle = e=>{
    console.log("hello")
    dispatch({
      type:INCREMENT_COUNT,
      payload:0
    })
  }
  return (
    <div className="Fifth">
      <h2>Fifth</h2>
      <button onClick={clickHandle}>Add one</button>
    </div>
  )
}
