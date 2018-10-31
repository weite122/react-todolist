import { takeEvery, put } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import axios from 'axios'
import { initListAction } from "./actionCreators"


function* getInitList() {
  try {
    const res = yield axios.get('https://easy-mock.com/mock/5bd942f5c33ab80683b9b4c1/reactTodo/list')
    const action = initListAction(res.data.Array)
    put(action)
  }catch (e) {
    console.log('request fail')
  }


}
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;