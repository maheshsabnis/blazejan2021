import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// importing bootstrap
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';

// to create a Application State for the application
import { createStore } from "redux";

import reduecrs from './reduxapp/reducers/reducers';

import {Provider} from 'react-redux';


import MainReduxComponent from './reduxapp/mainreduxcomponent';

import reportWebVitals from './reportWebVitals';


// let's create a store and configure it to the reducers so that all dispatched
// actions will be monitored by reducer under the store

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(), using browser's extension for redux to simulate
// dispatched actions and store 

let store = createStore(reduecrs,
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());

//   <Provider store={store}>: means the 'store' is configure for
// all react components inside the 'Provider'
// when any component dispatch action using 'useDispatch()'
// its output will be monitored by reducre and accrodingly the store will be updated


ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <MainReduxComponent></MainReduxComponent>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
