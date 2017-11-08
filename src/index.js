// Index for Slide Show App
// Adam Starr 
// 2017 June 30
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import App from './App'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'



import io from 'socket.io-client';
let socket = io('http://192.122.236.104:3000');//let socket = io('http://128.206.119.47:3000');
let socketIoMiddleware = createSocketIoMiddleware(socket, "server/");

let store = applyMiddleware(socketIoMiddleware)(createStore)(reducer);

store.subscribe(()=>{
  console.log('new state', store.getState());
});


ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById('root'));
registerServiceWorker();
