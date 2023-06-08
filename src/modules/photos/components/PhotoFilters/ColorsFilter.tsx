import React from 'react';
import styles from './PhotoFilters.module.scss';

export function ColorsFilter() {
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
