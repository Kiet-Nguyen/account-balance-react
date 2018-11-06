import React from 'react';

import classes from './Items.module.css';
import Item from './Item/Item';

const Items = ({ incomeDataApp, expensesDataApp, totalIncomeApp, totalExpensesApp, deleteItemApp }) => {
  const formatNumber = (num, type) => {
    let numSplit, intPart, decimalPart, sign, result;

    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');
    intPart = numSplit[0];
    // Add ',' to seperate thousand
    if (intPart.length > 6) {
      intPart = `${intPart.substring(
        0,
        intPart.length - 6
      )},${intPart.substring(
        intPart.length - 6,
        intPart.length - 3
      )},${intPart.substring(intPart.length - 3, intPart.length)}`;
    } else if (intPart.length > 3) {
      intPart = `${intPart.substring(
        0,
        intPart.length - 3
      )},${intPart.substring(intPart.length - 3, intPart.length)}`;
    }
    decimalPart = numSplit[1];

    type === 'income' ? (sign = '+') : (sign = '-');

    num > 0
      ? (result = `${sign} ${intPart}.${decimalPart}`)
      : (result = `${intPart}.${decimalPart}`);
    return result;
  }

  return (
    <section className="bg-light-gray">
      <div className="container js-event-delagation">
        <div className={ classes.items_info }>
          <div className={ classes.incomes }>
            <h4 className={ [classes.heading, classes.heading__income].join(' ') }>Income</h4>
            <div className={ classes.income__items }>
              { incomeDataApp.map(income => {
                return <Item
                  key={ income.id }
                  idItems={ `income-${income.id}` }
                  dateItems={`Date: ${income.date}`}
                  descriptionItems={ income.description }
                  amountItems={ `${formatNumber(income.amount, 'income')} €` }
                  deleteItemItems={ deleteItemApp } />
              }) }
            </div>

            <div className={ classes.incomes__total }>
              <p>Total income: </p>
              <p className="text-green total-income">
                { `${formatNumber(totalIncomeApp, 'income')} €` }
              </p>
            </div>
          </div>

          <div className={ classes.expenses }>
            <h4 className={ [classes.heading, classes.heading__expense].join(' ') }>Expense</h4>
            <div className={ classes.expense__items }>
              { expensesDataApp.map(expense => {
                return <Item
                  key={ expense.id }
                  idItems={ `expense-${expense.id}` }
                  dateItems={`Date: ${expense.date}`}
                  descriptionItems={ expense.description }
                  amountItems={ `${formatNumber(expense.amount, 'expense')} €` }
                  deleteItemItems={ deleteItemApp } />
              }) }
            </div>

            <div className={ classes.expenses__total }>
              <p>Total expenses: </p>
              <p className="text-red total-expense">
                { `${formatNumber(totalExpensesApp, 'expense')} €` }
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Items;