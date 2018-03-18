

import React from 'react';

import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem.js';

import selectedExpenses from '../selectors/expenses.js';

import { removeExpense } from '../actions/expenses';


// general connecting component to store 




const ExpenseList = (props) =>  {






    return (<div>
                
                   {props.expenses.map((expense , index) => 
                                      (<ExpenseListItem 
                                            key = {expense.id}
                                            {...expense}
                                              />))}  
                   

          </div>);
}


//mapping function for states and props

const mapStateToProps = (state) => {

   return {

       expenses : selectedExpenses(state.expenses,state.filters)

   };

}


export default connect(mapStateToProps)(ExpenseList);