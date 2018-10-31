import React from 'react';

const PlusIcon = ({ cssClass }) => (
  <svg className={ cssClass } width="100%" height="100%" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="25" />
    <line style={{
      fill: 'none',
      stroke: '#FFFFFF',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    }} x1="25" y1="13" x2="25" y2="38" />

    <line style={{
      fill: 'none',
      stroke: '#FFFFFF',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      strokeMiterlimit: 10,
    }} x1="37.5" y1="25" x2="12.5" y2="25" />
  </svg>
);

export default PlusIcon;