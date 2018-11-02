import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import InputFields from '../../components/InputFields/InputFields';
import TotalBalance from '../../components/TotalBalance/TotalBalance';
import Items from '../../components/Items/Items';

class App extends Component {
  state = {
    type: 'income',
    descriptionValue: '',
    amountValue: '',
    data: {
      allItems: {
        income: [],
        expense: []
      },
      totals: {
        income: 0,
        expense: 0
      },
      balance: 0,
      percentage: -1
    },
  }

  changedTypeHandler = () => {
    if (this.state.type === 'income') {
      this.setState({ type: 'expense' });
    } else if (this.state.type === 'expense') {
      this.setState({ type: 'income' });
    }
  }

  changedDescriptionValueHandler = (event) => {
    this.setState({ descriptionValue: event.target.value })
  }

  changedAmountValueHandler = (event) => {
    this.setState({ amountValue: event.target.value })
  }

  displayDate = () => {
    let today = new Date();
    let datestring = `
      ${today.toLocaleDateString('en-FI')} 
      ${today.getHours()}:${today.getMinutes()}
    `;
    return datestring;
  }

  formatNumber = (num, type) => {
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

  clickAddItemHandler = () => {
    let newItem, itemID;

    // Create item's ID
    if (this.state.data.allItems[this.state.type].length > 0) {
      itemID = this.state.data.allItems[this.state.type][this.state.data.allItems[this.state.type].length - 1].id + 1;
    } else {
      itemID = 0;
    }

    // Add new item into its respective postion
    if (this.state.type === 'income') {
      newItem = { 
        id: itemID, 
        date: this.displayDate(), 
        description: this.state.descriptionValue, 
        amount: this.formatNumber(this.state.amountValue, 'income') 
      };
    } else if (this.state.type === 'expense') {
      newItem = { 
        id: itemID, 
        date: this.displayDate(), 
        description: this.state.descriptionValue, 
        amount: this.formatNumber(this.state.amountValue, 'expense')
      };
    }
    this.state.data.allItems[this.state.type].push(newItem);

    this.setState({ descriptionValue: '', amountValue: '' });
    console.log(this.state.data);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <main>
          <InputFields
            selectTypeApp={ this.state.type }
            selectChangeApp={ this.changedTypeHandler }
            descriptionValueApp={ this.state.descriptionValue }
            amountValueApp={ this.state.amountValue }
            changedDescriptionValueApp={ this.changedDescriptionValueHandler }
            changedAmountValueApp={ this.changedAmountValueHandler }
            clickedAddItemApp={ this.clickAddItemHandler } />
          <TotalBalance />
          <Items
            incomeDataApp={ this.state.data.allItems.income }
            expensesDataApp={ this.state.data.allItems.expense } />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
