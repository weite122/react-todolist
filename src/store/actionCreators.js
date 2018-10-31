import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'
import axios from "axios"

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})

export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://easy-mock.com/mock/5bd942f5c33ab80683b9b4c1/reactTodo/list').then((res) => {
      const data = res.data.Array
      const action = initListAction(data)
      dispatch(action)
    })
  }
}