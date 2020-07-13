import React, {useState, useReducer} from 'react'
import {initialState, reducer} from "../reducers/reducer"

const AddToDo = () => {
  const [newToDoText, setNewToDoText] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleChanges = e => {
    setNewToDoText(e.target.value)
  }
  return(
    <div>
      <h1>Working on it</h1>
    </div>
  )
}

export default AddToDo