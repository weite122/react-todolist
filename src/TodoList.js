import React from 'react'
import { connect } from 'react-redux'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from "./store/actionCreators";


const TodoList = (props) => {
  const { inputValue, handleInputChange, handleAdd, list, handleDelete } = props
  return (
    <div>
      <input
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Submit</button>
      <ul>
        {
          list.map((item, index) => (<li key={index} onClick={() => {handleDelete(index)}}>{item}</li>))
        }
      </ul>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    handleInputChange (e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleAdd() {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleDelete(index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
