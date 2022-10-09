import { combineReducers, configureStore } from '@reduxjs/toolkit'
import jewelryReducer from './features/jewelrySlice'
import productsReducer from './features/productSlice';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk'
import {
  persistStore,
  persistReducer,
  
} from 'redux-persist'

import cartReducer from './features/cartSlice';

const rootPersistConfig = {
  key: "root",
  storage,
  blacklist: ["jewelry"],

}

const rootReducer = combineReducers({
    cart: cartReducer,
    products: productsReducer, 
    jewelry: jewelryReducer,
})

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
    middleware: [thunk],
})

export const persistor = persistStore(store)