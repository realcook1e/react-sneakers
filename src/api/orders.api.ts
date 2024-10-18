import { IOrder } from "../types/orders.type";
import { mainApi } from "./mainApi";

const ordersApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		getOrders: builder.query<IOrder[], void>({
			query: () => "/orders",
			providesTags: ["Order"],
		}),
		createOrder: builder.mutation<IOrder, Omit<IOrder, "id">>({
			query: body => ({
				url: "/orders",
				method: "POST",
				body,
			}),
			invalidatesTags: ["Order"],
		}),
	}),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = ordersApi;
