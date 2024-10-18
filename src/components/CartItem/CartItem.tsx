import { FC } from "react";
import { IProduct } from "../../types/products.type";
import CustomButton from "../ui/CustomButton/CustomButton";
import CloseSvg from "../../assets/icons/close.svg?react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { removeFromCart } from "../../store/cart/cart.slice";

interface CartItemProps {
	item: IProduct;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
	const dispatch = useAppDispatch();
	const handleRemoveFromCart = () => {
		dispatch(removeFromCart(item.id));
	};

	return (
		<div className='rounded-xl border border-gray-200 p-5 flex items-center gap-5 relative'>
			<div className='cartImage flex-shrink-0'>
				<img
					className='object-cover'
					src={item.imgUrl}
					alt='sneakers'
				/>
			</div>
			<div className='cartInfo'>
				<p className='text-sm'>{item.title}</p>
				<b className='text-sm'>{item.price} руб.</b>
			</div>
			<CustomButton
				extraClass='closeBtn absolute right-3 bottom-3'
				onClick={handleRemoveFromCart}
			>
				<CloseSvg />
			</CustomButton>
		</div>
	);
};

export default CartItem;
