import {  configureStore } from '@reduxjs/toolkit'
import listingsReducer from './features/listingsSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
        listings: listingsReducer,
    }
  })
}

// const listingsReducer = listingsSlice.reducers;

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']



