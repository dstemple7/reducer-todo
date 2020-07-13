import React, {useState, useReducer} from 'react'

const ToDoForm = ({dispatch}) => {
  const [items, setItems] = useState("")

  const handleChanges = e => {
    setItems(e.target.value)
  }

  const submitForm = e => {
    e.preventDefault()
    setItems('')
    dispatch ({
      type: 'ADD_TODO',
      payload: [items]
    })
  }
  
  const clearCompleted = e => {
    e.preventDefault()
    dispatch ({
      type: 'CLEAR_COMPLETED'
    })
  }

  return(
    <div>
      <form onSubmit={submitForm}>
        <label>Add ToDo</label>
          <input
            placeholder="Do something ALREADY..."
            name='todo'
            onChange={handleChanges}
            value={items}
            id={Date.now()}
          >
          </input>
        <button>Add ToDo</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </form>
    </div>
  )
}

export default ToDoForm