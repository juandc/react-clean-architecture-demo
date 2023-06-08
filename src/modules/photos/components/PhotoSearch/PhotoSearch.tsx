import React from 'react';
import styles from './PhotoSearch.module.scss';
import { useStore } from '@/store/ContextStore';
import { useRouter } from '@/utils/useRouter';

export function PhotoSearch() {
  const { defaultSearch, setSearch } = usePhotoSearch();
  const [searchValue, setSearchValue] = React.useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSearch(searchValue);
    }
  };
  
  return (
    <div className={styles.photosearch_container}>
      <input
        className={styles.photosearch_input}
        type="text"
        placeholder="Search..."
        defaultValue={defaultSearch}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <span className={styles.photosearch_bg} />
    </div>
  );
}

function usePhotoSearch() {
  const router = useRouter();
  const {
    search: defaultSearch,
    setSearch: setStoreSearch,
  } = useStore();

  const setSearch = (newSearch) => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, search: newSearch },
    }, undefined, { shallow: true });
    setStoreSearch(newSearch);
  };
  
  return {
    defaultSearch,
    setSearch,
  };
}
