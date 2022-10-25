import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    items: [],
    selectedProduct: [],
    status: null,
    error: null,
};

// export const productsFetch = createAsyncThunk(
//     "products/productsFetch",
//         async() => {
//             const response = await axios.get('https://fakestoreapi.com/products/');
//             return response?.data;
//         }
// );


export const productsFetch = createAsyncThunk(
    "products/productsFetch",
        async() => {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            return response?.data;
        }
);

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        selectedProduct: (state, { payload }) => {
            let selected = { ...payload }
            state.selectedProduct = selected
        }
    },
    extraReducers: {
        [productsFetch.pending]: (state, action) => {
            state.status = 'pending'
        },
        [productsFetch.fulfilled]: (state, action) => {
            state.status = 'success';
            state.items = action.payload;
        },
        [productsFetch.rejected]: (state, action) => {
            state.status = 'rejected';
            state.error = action.payload;
        }
    }
})

export default productsSlice.reducer;
export const {
    selectedProduct
} = productsSlice.actions;
