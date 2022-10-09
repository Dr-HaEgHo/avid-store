import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart', 
    initialState :{
        cart: [],
    },
    reducers: {
        addToCart: (state, {payload}) => {
            console.log(payload)

            // check if product exist in cart, if true adjust quantity
          const inCart = state.cart.find((item) =>
          item.id === payload.id ? true : false)
          
          // adding a new product to cart
          let result = {...payload, quantity: 1}

          let newCartItems =  inCart ? state.cart.map((item)=> item.id === payload.id ?
           {...item, quantity: item.quantity + 1} : item) 
           : [...state.cart, result]

            state.cart = newCartItems;
            
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++
        },
        decrementQuantity: (stste, action) => {
            const item = stste.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter((item) => item.id !== action.payload);
            state.cart = removeItem;
        },
    },
})

export default cartSlice.reducer;
export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
} = cartSlice.actions;