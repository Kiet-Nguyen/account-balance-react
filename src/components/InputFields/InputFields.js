import React from 'react';

import classes from './InputFields.module.css';
import PlusIcon from '../UI/PlusIcon/PlusIcon';

const InputFields = ({ selectChangeApp, selectTypeApp, descriptionValueApp, amountValueApp, changedDescriptionValueApp, changedAmountValueApp, clickedAddItemApp }) => ( 
  <section className="bg-light-gray">
    <div className="container">
      <div className={ classes.add_items }>
        <div className={ classes.input_item }>
          <select 
            onChange={ selectChangeApp } 
            className={ [classes.item_type, (selectTypeApp === 'expense') ? classes.type_expense_focus : null].join(' ') }>
            <option value={ selectTypeApp }>Income</option>
            <option value={ selectTypeApp }>Expense</option>
          </select>
        </div>

        <div className={ classes.input_item }>
          <input 
            type="text" 
            className={ [classes.description__input, (selectTypeApp === 'expense') ? classes.type_expense_focus : null].join(' ') } 
            placeholder="Description"
            value={ descriptionValueApp }
            onChange={ changedDescriptionValueApp } />
        </div>

        <div className={ classes.input_item }>
          <input 
            type="number" 
            className={ [classes.amount__input, (selectTypeApp === 'expense') ? classes.type_expense_focus : null].join(' ') } placeholder="Value"
            value={ amountValueApp }
            onChange={ changedAmountValueApp } />
        </div>

        <button className={ [classes.btn, classes.input_item].join(' ') } onClick={ clickedAddItemApp }>
          <PlusIcon cssClass={ [classes.add_circle, (selectTypeApp === 'expense') ? classes.add_circle_expense_color : null].join(' ') } />
        </button>
      </div>
    </div>
  </section>
);

export default InputFields;