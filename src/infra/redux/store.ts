import { configureStore, createSlice, ThunkAction } from '@reduxjs/toolkit';
import { Action } from 'redux';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { saluteSlice } from './salute.state';

const createStore = () => configureStore({
  reducer: {
    [saluteSlice.name]: saluteSlice.reducer,
  },
  devTools: true,
});

export const wrapper = createWrapper<ReduxStore>(createStore);

export type ReduxStore = ReturnType<typeof createStore>;
export type ReduxState = ReturnType<ReduxStore['getState']>;
export type ReduxDispatch = ReduxStore['dispatch'];
export type ReduxThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action
>;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// export const useAppDispatch = () => useDispatch<AppDispatch>();
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const fetchSubject =
//   (id: any): AppThunk =>
//   async dispatch => {
//     const timeoutPromise = (timeout: number) => new Promise(resolve => setTimeout(resolve, timeout));

//     await timeoutPromise(200);

//     dispatch(
//       subjectSlice.actions.setEnt({
//         [id]: {
//           id,
//           name: `Subject ${id}`,
//         },
//       }),
//     );
//   };

// export const selectSubject = (id: any) => (state: AppState) => state?.[subjectSlice.name]?.[id];
