import { PhotosHTTPData } from '@/modules/photos/photos.data';
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
    search,
    color,
    changeOrder,
  } = useStore();
  const router  = useRouter();
  const photosData = new PhotosHTTPData();

  const getNewPhotos = async (newOrderBy, callback) => {
    const filters = { search, color, order_by: newOrderBy };
    const rawData = await photosData.getPhotoList(filters);
    const photos = photosData.createPhotoListAdapter(rawData);
    callback({ orderBy: newOrderBy, photos });
  };
  
  const replaceRoute = (newOrderBy) => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, order_by: newOrderBy },
    });
  };

  const updateStore = (payload) => {
    changeOrder(payload);
  };

  const setOrderBy = (newOrderBy) => {
    getNewPhotos(newOrderBy, payload => {
      replaceRoute(payload.orderBy);
      updateStore(payload);
    });
  };

  return [orderBy, setOrderBy] as const;
}

const orderByList = [
  { value: 'relevant', txt: 'Relevant' },
  { value: 'latest', txt: 'Latest' },
];
