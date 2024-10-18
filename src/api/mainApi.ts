import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProduct } from "../types/products.type";

const API_URL = "https://670d98ee073307b4ee43f81f.mockapi.io";

export const mainApi = createApi({
	reducerPath: "mainApi",
	baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
	tagTypes: ["Product", "Order"],
	endpoints: builder => ({
		getProducts: builder.query<IProduct[], boolean | void>({
			query: isFavorite =>
				`/products${isFavorite ? "?isFavorite=true" : ""}`,
			providesTags: ["Product"],
		}),
	}),
});

export const { useGetProductsQuery } = mainApi;
