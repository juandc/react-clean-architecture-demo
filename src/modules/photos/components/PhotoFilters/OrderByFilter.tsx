import { useStore } from '@/store/ContextStore';
import { useRouter } from '@/utils/useRouter';
import styles from './PhotoFilters.module.scss';

export function OrderByFilter() {
  const [orderBy, setOrderBy] = useOrderBy();
  
  const handleChange = (e) => {
    setOrderBy(e.target.value)
  };
  
  return (
    <div className={styles.orderby_container}>
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

function useOrderBy() {
  const {
    orderBy,
    setOrderBy: setStoreOrderBy,
  } = useStore();
  const router  = useRouter();
  
  const setOrderBy = (newOrderBy) => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, order_by: newOrderBy },
    }, undefined, { shallow: true });
    setStoreOrderBy(newOrderBy);
  };

  return [orderBy, setOrderBy] as const;
}

const orderByList = [
  { value: 'relevant', txt: 'Relevant' },
  { value: 'latest', txt: 'Latest' },
];
