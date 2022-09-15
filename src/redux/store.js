import { configureStore } from '@reduxjs/toolkit'
import jewelryReducer from './features/jewelrySlice'
import productsReducer from './features/productSlice' 


export const store = configureStore({
    reducer: {
        products: productsReducer, 
        jewelry: jewelryReducer,
    }
})
