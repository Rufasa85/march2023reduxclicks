import React, {useContext, useState} from 'react'
import { UPDATE_NAME } from '../../utils/actions'
import { CountContext } from '../../utils/CountContext'
import "./style.css"
export default function Seventh() {
  const [{name},dispatch] = useContext(CountContext)
  const [updateName, setUpdateName] = useState(name)

  const formSubmit= e=>{
    e.preventDefault();
    dispatch({
      type:UPDATE_NAME,
      payload:updateName
    })
  }
  return (
    <div className="Seventh">
      
      <h2>Seventh</h2>
      <form onSubmit={formSubmit}>
        <input value={updateName}  onChange={e=>setUpdateName(e.target.value)}/>
        <button>updateName</button>
      </form>
    </div>
  )
}
