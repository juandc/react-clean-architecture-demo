import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ReduxState } from "./store";

export const saluteSlice = createSlice({
  name: 'salute',
  initialState: { saluteState: 'initial salute' },
  reducers: {
    setSaluteState(state, action) {
      console.log('setSalute reducer');
      return {
        ...state,
        saluteState: action.payload,
      }
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      // console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload.salute,
      };
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(HYDRATE, (state, action) => {
  //     console.log('HYDRATE');
  //     console.log(action);
  //     return {
  //       ...state,
  //       ...action.payload.salute,
  //     };
  //   });
  // },
});

export const selectSalute = (state: ReduxState) => state.salute;
export const { setSaluteState } = saluteSlice.actions;

// const nextState = {
//   ...state, // use previous state
//   ...action.payload, // apply delta from hydration
// };
// if (state.count) nextState.count = state.count; // preserve count value on client side navigation
// return nextState;
