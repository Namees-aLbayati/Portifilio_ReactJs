import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import counterReducer from './redux/reducer';
const store=createStore(counterReducer)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
