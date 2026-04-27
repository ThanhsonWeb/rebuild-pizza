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

// selector
export const getTotalQuantity = (store) =>
	store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (store) =>
	store.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);

export const { addItem, clearCart, deleteItem } = cartSlice.actions;

export default cartSlice.reducer;
