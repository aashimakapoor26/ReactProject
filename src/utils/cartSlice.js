import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            // Older redux -> don't mutate state - below line was prohibited there
            // const newState = [...state];
            // newState.items.push(action.payload);
            // return newState;

            // Redux toolkit - allows to mutate the state - uses IMMer behind the scenes
            state.items.push(action.payload);
        },

        removeItem: (state) => {
            state.items.pop();
        },

        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;