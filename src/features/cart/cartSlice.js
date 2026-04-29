import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	cart: [
		
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
		increaseQuantity(state, action) {
			const item = state.cart.find((item) => item.pizzaId === action.payload);
			item.quantity++;
			item.totalPrice = item.quantity * item.unitPrice;
		},
		decreaseQuantity(state, action) {
			const item = state.cart.find((item) => item.pizzaId === action.payload);

			item.quantity > 0 && item.quantity--;
			item.totalPrice = item.quantity * item.unitPrice;
		},

		clearCart(state) {
			state.cart = [];
		},
	},
});

// selector
export const getCart = (store) => store.cart.cart;

export const getTotalQuantity = (store) =>
	store.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalPrice = (store) =>
	store.cart.cart.reduce((sum, item) => sum + item.unitPrice, 0);

export const getCurrentQuantityById = (id) => (store) =>
	store.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
//getCurrentQuantityById  takes id as a parameter.

// The inner function takes "store" as a parameter.

// The inner function contains the logic to find the pizza item in the cart and return its quantity.

export const {
	addItem,
	clearCart,
	deleteItem,
	increaseQuantity,
	decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
