import React from 'react';
import ExpenseForm from './ExpenseForm';
import { addExpense, removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';


const AddExpensePage = (props) => (
     <div>
       <h1>AddExpense</h1>
       <ExpenseForm onSubmit = {(expense) => {
        
        props.dispatch(addExpense(expense));
         props.history.push('/');

      
         }  } />

       </div>
);

export default connect()(AddExpensePage);


