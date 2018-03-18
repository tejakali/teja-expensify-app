import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import { Provider }  from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();



console.log("hello world");


//this state ment will provide store to all components so that we can use them in each

//of the components to when changes made to store.
const jsx  = (
    
    <Provider store = {store}>
     <AppRouter/>

     </Provider>);

ReactDOM.render(jsx, document.getElementById('app'));
