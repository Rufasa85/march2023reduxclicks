import React,{useContext} from 'react'
import { CountContext } from '../../utils/CountContext'
import Seventh from '../Seventh'
import "./style.css"
export default function Sixth() {
  const [{name}] = useContext(CountContext)
  return (
    <div className="Sixth">
      <h2>Sixth name:{name}</h2>
    <Seventh/>
    </div>
  )
}
