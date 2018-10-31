import React from 'react';

import classes from './InputFields.module.css';
import PlusIcon from '../UI/PlusIcon/PlusIcon';

const InputFields = () => (
  <section className="bg-light-gray">
    <div className="container">
      <div className={ classes.add_items }>
        <div className={ classes.input_item }>
          <select className={ classes.item_type }>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div className={ classes.input_item }>
          <input type="text" className={ classes.description__input } placeholder="Description" />
        </div>

        <div className={ classes.input_item }>
          <input type="number" className={ classes.amount__input } placeholder="Value" />
        </div>

        <button className={ [classes.btn, classes.input_item].join(' ')}>
          <PlusIcon cssClass={ classes.add_circle } />
        </button>
      </div>
    </div>
  </section>
);

export default InputFields;