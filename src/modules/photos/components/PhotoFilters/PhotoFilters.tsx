import React from 'react';
import styles from './PhotoFilters.module.scss';
import { PhotosHTTPData } from '@/modules/photos/photos.data';
import { useStore } from '@/store/ContextStore';
import { useRouter } from '@/utils/useRouter';

export function PhotoFilters() {
  return (
    <div className={styles.photofilters_container}>
      <OrderByFilter />
      <ColorsFilter />      
    </div>
  );
}

function OrderByFilter() {
  const { setPhotos, setOrderBy, orderBy, search, color } = useStore();
  const router  = useRouter();

  const handleChange = async (e) => {
    const newOrderBy = e.target.value;
    setOrderBy(newOrderBy);

    router.replace({
      pathname: router.pathname,
      query: { ...router.query, order_by: newOrderBy },
    });

    const filters = {
      search,
      color,
      order_by: newOrderBy,
    };
    
    const photosData = new PhotosHTTPData();
    const rawData = await photosData.getPhotoList(filters);
    const photos = photosData.createPhotoListAdapter(rawData);
    console.log({ photos });
    
    setPhotos(photos);
  };
  
  return (
    <div className={styles.orderby_container} >
      <select
        className={styles.orderby_select}
        style={{ width: orderBy.length * 13.5 }}
        name="order_by"
        value={orderBy}
        onChange={handleChange}
      >
        {orderByList.map(({ value, txt }) => (
          <option key={value} value={value}>{txt}</option>
        ))}
      </select>
    </div>
  );
}

const orderByList = [
  { value: 'relevant', txt: 'Relevant' },
  { value: 'latest', txt: 'Latest' },
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
