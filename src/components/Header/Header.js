import React from 'react';

import classes from './Header.module.css';

const Header = () => {
  let now, month, months, year, monthYear;
  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'Novemeber',
    'December'
  ];

  now = new Date();
  month = months[now.getMonth()];
  year = now.getFullYear();
  monthYear = `${month}, ${year}`;

  return (
    <header className="bg-green text-center">
      <div className="container">
        <h1 className={ classes.heading_1 }>{ 'Account balance in ' + monthYear }</h1>
      </div>
    </header>
  );
}

export default Header;