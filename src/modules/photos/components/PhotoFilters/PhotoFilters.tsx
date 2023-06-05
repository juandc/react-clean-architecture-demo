import React from 'react';
import styles from './PhotoFilters.module.scss';

export function PhotoFilters() {
  return (
    <div className={styles.photofilters_container}>
      <OrderByFilter />
      <ColorsFilter />      
    </div>
  );
}

function OrderByFilter() {
  const [selectedOrder, setSelectedOrder] = React.useState('latest');
  const [width, setWidth] = React.useState(6 * 13.5);

  const handleChange = (e) => {
    setSelectedOrder(e.target.value);
    setWidth(e.target.value.length * 13);
    // TODO: este width no está bien hecho :(
  };
  
  return (
    <div className={styles.orderby_container} >
      <select
        className={styles.orderby_select}
        style={{ width }}
        name="order_by"
        value={selectedOrder}
        onChange={handleChange}
      >
        {orderBy.map(({ value, txt }) => (
          <option key={value} value={value}>{txt}</option>
        ))}
      </select>
    </div>
  );
}

const orderBy = [
  { value: 'latest', txt: 'Latest' },
  { value: 'relevant', txt: 'Relevant' },
];

function ColorsFilter() {
  const [selectedColor, setSelectedColor] = React.useState('red');

  const handleChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className={styles.color_container}>
      <select
        className={`${styles.color_select} ${selectedColor}`}
        name="color"
        value={selectedColor}
        onChange={handleChange}
      >
        {colors.map(({ label, options }) => (
          <optgroup key={label} label={label}>
            {options.map(({ value, txt }) => (
              <option key={value} value={value}>{txt}</option>
            ))}
          </optgroup>
        ))}
      </select>
    </div>
  );
}

const colors = [
  {
    label: 'Default',
    options: [
      { value: 'black_and_white', txt: 'Black and white' },
    ],
  },
  {
    label: 'Dark',
    options: [
      { value: 'black', txt: 'Black' },
      { value: 'purple', txt: 'Purple' },
      { value: 'magenta', txt: 'Magenta' },
      { value: 'teal', txt: 'Teal' },
    ],
  },
  {
    label: 'Light',
    options: [
      { value: 'green', txt: 'Green' },
      { value: 'yellow', txt: 'Yellow' },
      { value: 'orange', txt: 'Orange' },
      { value: 'red', txt: 'Red' },
      { value: 'blue', txt: 'Blue' },
      { value: 'white', txt: 'White' },
    ],
  },
];
