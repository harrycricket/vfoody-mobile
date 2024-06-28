import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import cartSlice from './slice/cartSlice';
import globalSlice from './slice/globalSlice';
import orderHistorySlice from './slice/orderHistorySlice';
import orderSlice from './slice/orderSlice';
import persistSlice from './slice/persistSlice';
import shopDetailsSlice from './slice/shopDetailsSlice';
import userInfoSlice from './slice/userSlice';
const reducers = combineReducers({
  userInfoSlice: userInfoSlice.reducer,
  cartSlice: cartSlice.reducer,
  shopDetailsSlice: shopDetailsSlice.reducer,
  globalSlice: globalSlice.reducer,
  persistSlice: persistSlice.reducer,
  orderSlice: orderSlice.reducer,
  orderHistorySlice: orderHistorySlice.reducer
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: ['shopDetailsSlice', 'globalSlice', 'orderSlice', 'orderHistorySlice'],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
