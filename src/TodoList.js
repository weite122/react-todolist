import React, { Component } from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from "./store/actionCreators"
import TodolistUI from './TodolistUI'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <TodolistUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      >
      </TodolistUI>
    )
  }
  handleInputChange (e) {
    const action = getInputChangeAction( e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(store.getState())
  }
  handleBtnClick () {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete (index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  componentDidMount() {
    axios.get('https://easy-mock.com/mock/5bd942f5c33ab80683b9b4c1/reactTodo/list').then((res) => {
      const data = res.data.Array
      const action = initListAction(data)
      store.dispatch(action)
    }).catch(()=>{
      console.log('error')
    })
  }
}

export default TodoList