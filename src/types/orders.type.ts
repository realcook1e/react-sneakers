import { IProduct } from "./products.type";

export interface IOrder {
	id: string;
	products: IProduct[];
}
