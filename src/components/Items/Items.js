import React from 'react';

import classes from './Items.module.css';
import Item from './Item/Item';

const Items = ({ incomeDataApp, expensesDataApp }) => {
  return (
    <section className="bg-light-gray">
      <div className="container js-event-delagation">
        <div className={ classes.items_info }>
          <div className={ classes.incomes }>
            <h4 className={ [classes.heading, classes.heading__income].join(' ') }>Income</h4>
            <div className={ classes.income__items }>
              { incomeDataApp.map(income => {
                return <Item
                  key={income.id}
                  idItems={`income-${income.id}`}
                  descriptionItems={income.description}
                  amountItems={income.amount} />
              }) }
            </div>

            <div className={ classes.incomes__total }>
              <p>Total income: </p>
              <p className="text-green total-income"></p>
            </div>
          </div>

          <div className={ classes.expenses }>
            <h4 className={ [classes.heading, classes.heading__expense].join(' ') }>Expense</h4>
            <div className={ classes.expense__items }>
              { expensesDataApp.map(expense => {
                return <Item
                  key={expense.id}
                  idItems={`expense-${expense.id}`}
                  descriptionItems={expense.description}
                  amountItems={expense.amount} />
              }) }
            </div>

            <div className={ classes.expenses__total }>
              <p>Total expenses: </p>
              <p className="text-red total-expense"></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Items;