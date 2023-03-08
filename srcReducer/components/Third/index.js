import React,{useContext} from 'react'

import Fourth from '../Fourth'
import "./style.css"
import { CountContext } from '../../utils/CountContext'
import { RESET_COUNT } from '../../utils/actions'

export default function Third() {
  const [state, dispatch] = useContext(CountContext);
  const clickHandle = e=>{
    dispatch({
      type:RESET_COUNT,
      payload:0
    })
  }
  return (
    <div className="Third">
      <h2>Third</h2>
      <button onClick={clickHandle}>Reset count</button>
      <Fourth />
    </div>
  )
}
