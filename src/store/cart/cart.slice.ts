import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../../types/products.type";
import { PURGE } from "redux-persist";

const initialState: IProduct[] = [];

export const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<IProduct>) => {
			state.push(action.payload);
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			return state.filter(item => item.id !== action.payload);
		},
		clearCart: () => initialState,
	},
	extraReducers: builder => {
		builder.addCase(PURGE, () => initialState);
	},
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
