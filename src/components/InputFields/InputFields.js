import React, { Component } from 'react';

import classes from './InputFields.module.css';
import PlusIcon from '../UI/PlusIcon/PlusIcon';

class InputFields extends Component {
  selectOption = React.createRef();
  descriptionInput = React.createRef();
  amountInput = React.createRef();
  plusIconRef = React.createRef();

  onChangeTypeHandler = () => {
    const selectOptionClassList = this.selectOption.current.classList;
    const desInputClassList = this.descriptionInput.current.classList;
    const amountInputClassList = this.amountInput.current.classList;
    const plusIconRefClassList = this.plusIconRef.current.classList;
    selectOptionClassList.toggle(`${classes.type_expense_focus}`);
    desInputClassList.toggle(`${classes.type_expense_focus}`);
    amountInputClassList.toggle(`${classes.type_expense_focus}`);
    plusIconRefClassList.toggle(`${classes.add_circle_expense_color}`);
  }

  render() {
    return (
      <section className="bg-light-gray">
        <div className="container">
          <div className={classes.add_items}>
            <div className={classes.input_item}>
              <select onChange={this.onChangeTypeHandler} ref={this.selectOption} className={classes.item_type}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>

            <div className={classes.input_item}>
              <input type="text" ref={this.descriptionInput} className={classes.description__input} placeholder="Description" />
            </div>

            <div className={classes.input_item}>
              <input type="number" ref={this.amountInput} className={classes.amount__input} placeholder="Value" />
            </div>

            <button className={[classes.btn, classes.input_item].join(' ')}>
              <PlusIcon plusIconRef={this.plusIconRef} cssClass={classes.add_circle} />
            </button>
          </div>
        </div>
      </section>
    );
  }
}

export default InputFields;