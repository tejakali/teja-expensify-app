
import React from 'react';

import ReactDOM from 'react-dom';

import { SingleDatePicker } from 'react-dates';

import 'react-dates/lib/css/_datepicker.css';
import moment from 'moment';




  class Date extends React.Component {



    state = {

          currentdate : moment(),

        calenderFocused : false



    }


 onDateChange = ( date ) => (this.setState({ currentDate : date }));
onFocusChange  =({ focused }) => this.setState({calenderFocused : focused });
   

    render()
    {



      return (<div>
           
        <SingleDatePicker 
        date={this.state.currentdate} // momentPropTypes.momentObj or null
        onDateChange = {this.onDateChange} // PropTypes.func.isRequired
        focused = {this.state.calenderFocused} // PropTypes.bool
        onFocusChange ={this.onFocusChange} // PropTypes.func.isRequired
        />
       </div>);
    }

  }


ReactDOM.render(<Date /> , document.getElementById("app"));