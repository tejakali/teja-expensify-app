
import React from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

import moment from 'moment';

import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



//Expense form
class  ExpenseForm extends React.Component{

//state to track the user entry

constructor(props)
{
   super(props);

   console.log(props.expense);
  

    this.state = {

        description : props.expense ? props.expense.description : '',
        note : props.expense ? props.expense.note : '',
        amount : props.expense ? (props.expense.amount/100).toString() : '',

        currentDate : props.expense ? moment(props.expense.createdAt) : moment(),
        currentFocus : false,
        error : ''

      
    };

}

onChangeDescriptionNote = (e) =>
{

   const description = e.target.value;

   this.setState({ description : description});



}

onChangeNoteOptional = (e) =>
{

    e.persist();

    this.setState({ note :  e.target.value })
}

onChangeAmount = (e) => {
        
    const amount = e.target.value;

if( !amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))

{
     this.setState({ amount });
    
}

}


onDateChange = (date) => {

    if(date)
    {

      this.setState(() => ({ currentDate : date}));

    }
        
}


onFocusChange = (focused) => {

    this.setState(() => ({ currentFocus : focused}));
      
}

onSubmit = (e) => {

    e.preventDefault();
   if( !this.state.description || !this.state.amount)
   {
       this.setState(()=>({ error : "Please provide decription and amount."}))
   }

   else{

    //clear the error

    this.setState(()=>({ error : ""}));

    const expense = {
            
        description : this.state.description,

        amount : parseFloat(this.state.amount ,10) * 100,

        createdAt : this.state.currentDate.valueOf(),

        note : this.state.note

    }

    console.log(expense);



    this.props.onSubmit(expense);

    
   }

}







  render()
    {

         return (<div>
        
            {this.state.error && <p>{this.state.error}</p>}
              <form onSubmit = {this.onSubmit}>

                  <input 
                     type = "text"
                     placeholder = "Description"
                     value = {this.state.description}
                     autoFocus 
                      onChange = {this.onChangeDescriptionNote}
                  
                  />
                  <input 
                  type = "text"
                  placeholder = "Amount"
                  value = {this.state.amount}
                  onChange = {this.onChangeAmount}
                   />
                   <SingleDatePicker 
                     date = {this.state.currentDate}
                     onDateChange = {this.onDateChange}
                     focused = {this.state.focused}
                     onFocusChange = {({focused}) => (this.setState({focused }))}
                     numberOfMonths = {1}
                     isOutsideRange = {() => false}
                        />



                   <textarea placeholder = "Add a note for expense (optional)" value = {this.state.note} onChange = {this.onChangeNoteOptional}>

                   </textarea>



                   <button>AddExpense</button>
          


              </form>


                   



                 </div>);


    }
}



export default connect()(ExpenseForm);