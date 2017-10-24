import React from 'react'
import Stage from './containers/Stage'
import {createStore} from 'redux'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import ImgStatesReducer from './reducers/ImgStatesReducer'
import './styles/index.scss'

const store = createStore(ImgStatesReducer);

ReactDOM.render(
  <Provider store = {store}>
    <Stage />
  </Provider>,
  document.getElementById('root')
)
