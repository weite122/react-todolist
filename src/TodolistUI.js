import React from 'react'
import {Input, Button, List} from 'antd'

const TodolistUI = (props) => {
  return (
    <div style={{marginTop: "10px", marginLeft: "10px"}}>
      <Input
        value={props.inputValue}
        placeholder='todo Info'
        style={{width: "300px", marginRight: "10px"}}
        onChange={props.handleInputChange}
      />
      <Button type="primary" onClick={props.handleBtnClick}>Submit</Button>
      <List
        style={{marginTop: "10px", width: "300px"}}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>)}
      />
    </div>
  )
}
// class TodolistUI extends Component {
//   render() {
//     return (
//       <div style={{marginTop: "10px", marginLeft: "10px"}}>
//         <Input
//           value={this.props.inputValue}
//           placeholder='todo Info'
//           style={{width: "300px", marginRight: "10px"}}
//           onChange={this.props.handleInputChange}
//         />
//         <Button type="primary" onClick={this.props.handleBtnClick}>Submit</Button>
//         <List
//           style={{marginTop: "10px", width: "300px"}}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)}
//         />
//       </div>
//     )
//   }
// }

export default TodolistUI