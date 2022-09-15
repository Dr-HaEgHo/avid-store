import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    jewels: [],
    status: null,
    error: null,
}

export const fetchJewelries = createAsyncThunk(
    "jewelry/fetchJewelries",
    async () => {
        const res = await axios.get('https://fakestoreapi.com/products/category/jewelery')
        return res?.data
    }
)


const jewelrySlice = createSlice({
    name: 'jewelry',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchJewelries.pending]: (state, action) => {
            state.status = "pending"
        },
        [fetchJewelries.fulfilled]: (state, action) => {
            state.status = "successful";
            state.jewels = action.payload;
        },
        [fetchJewelries.rejected]: (state, action) => {
            state.status = "rejected";
            state.error = action.payload;
        }
    }
});


export default jewelrySlice.reducer;