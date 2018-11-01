import React from 'react';

import classes from './TotalBalance.module.css';

const TotalBalance = () => (
  <section className="bg-light-gray">
    <div className="container">
      <div className={classes.balance}>
        <p className="mr-xs">Balance:</p>
        <p className="balance-value"> </p>
      </div>
    </div>
  </section>
);

export default TotalBalance;
