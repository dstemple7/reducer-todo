import React, {useState, useReducer} from 'react'
import {Completed} from './Completed'
import {initialState, reducer} from '../reducers/reducer'
import ToDoForm from './ToDoForm'

export const ToDoList = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
  <div>
    <ToDoForm dispatch={dispatch} />
    {state.map(toDo => {
      return <Completed todo={toDo} dispatch={dispatch} key={toDo.id} />
    })}
  </div>
  )
}