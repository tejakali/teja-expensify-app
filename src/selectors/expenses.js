// Get visible expenses

import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {

    const expenseMoment = moment(expense.createdAt);


    const startDateMatch = startDate ? expenseMoment.isSameOrAfter(startDate , 'day') : true;
    const endDateMatch = endDate ? expenseMoment.isSameOrBefore(endDate , 'day') : true;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};
