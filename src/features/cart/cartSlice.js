import { createSlice } from '@reduxjs/toolkit';
import items from '../../items.js';

const initialState = {
    cartItem: items,
    amount: 0,
    total: 0,
    isLoading: true,
};    

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItem = [];
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            state.cartItem = state.cartItem.filter((item) => item.id !== itemId);
        },
        increase: (state, {payload}) => {
            const cartItem = state.cartItem.find((item) => item.id === payload.id);
            cartItem.amount++;
        },
        decrease: (state, {payload}) => {
            const cartItem = state.cartItem.find((item) => item.id === payload.id);
            cartItem.amount--;
        },
        calculateTotals: (state) => {
            let amount = 0;
            let total = 0;
            state.cartItem.forEach((item) => {
                amount += item.amount;
                total += item.amount * item.price;
            });
            state.amount = amount;
            state.total = total;
        },          
    }    
});

export const { clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;