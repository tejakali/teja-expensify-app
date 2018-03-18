import React from 'react';
import ExpenseForm from './ExpenseForm';

import {connect} from 'react-redux';
import { editExpense } from '../actions/expenses';
import { removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {


  console.log(props.expenses);
  console.log(props.match.params.id);
  
  const expense = props.expenses.find((expense) => (expense.id == props.match.params.id));

  

  return (
    <div>
     <h1> Edit Expense </h1>
     <ExpenseForm

       expense = {expense}
       onSubmit = {(updates) => {

          props.dispatch(editExpense(expense.id , updates));

          props.history.push('/');
                    
       } }

     />
     <button onClick = { () => {
       
      console.log(expense.id); 
      props.dispatch(removeExpense({id : expense.id}));

      props.history.push('/');
    
    }  }>Remove</button>



                                             


    </div>
  );
};


const mapStateToProps = (state) => {


  return {

    expenses : state.expenses
  };





}

export default connect(mapStateToProps)(EditExpensePage);
