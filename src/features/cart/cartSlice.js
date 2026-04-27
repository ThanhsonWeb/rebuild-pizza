import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [
		{
			pizzaId: 12,
			name: "Mediterranean",
			quantity: 2,
			unitPrice: 16,
			totalPrice: 32,
		},
	],
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addItem(state, action) {
			state.cart.push(action.payload);
		},
		deleteItem(state, action) {
			state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
		},
		clearCart(state) {
			state.cart = [];
		},
	},
});

export const { addItem, clearCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
