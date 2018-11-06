import React from 'react';

import DeleteIcon from '../../UI/DeleteIcon/DeleteIcon';
import classes from './Item.module.css';

const Item = ({ idItems, descriptionItems, amountItems, dateItems, deleteItemItems }) => (
  <div className={ classes.item } id={ idItems }>
    <div className={ classes.item__date }>{ dateItems }</div>

    <div className={ classes.item__details }>
      <p className={ classes.description }>{  descriptionItems  }</p>
      <div className={ classes.value_btn_container }>
        <p className={ classes.value }>{ amountItems }</p>
        <button 
          className={ [classes.btn, classes.delete_btn].join(' ') }
          onClick={ deleteItemItems } >
          <DeleteIcon />
        </button>
      </div>
    </div>
  </div>
);

export default Item;