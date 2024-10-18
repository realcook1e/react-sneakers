import { IProduct } from "../types/products.type";
import { mainApi } from "./mainApi";

const productsApi = mainApi.injectEndpoints({
	endpoints: builder => ({
		toggleFavorite: builder.mutation<
			IProduct,
			Pick<IProduct, "id"> & Pick<IProduct, "isFavorite">
		>({
			query: ({ id, isFavorite }) => ({
				url: `products/${id}`,
				method: "PUT",
				body: { isFavorite },
			}),
			invalidatesTags: ["Product"],
		}),
	}),
});

export const { useToggleFavoriteMutation } = productsApi;
