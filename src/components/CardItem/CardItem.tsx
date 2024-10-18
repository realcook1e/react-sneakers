import { FC, useEffect, useState } from "react";
import { IProduct } from "../../types/products.type";
import CustomButton from "../ui/CustomButton/CustomButton";
import HeartSvg from "../../assets/icons/heart_button.svg?react";
import PlusSvg from "../../assets/icons/plus.svg?react";
import CheckSvg from "../../assets/icons/check.svg?react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addToCart, removeFromCart } from "../../store/cart/cart.slice";
import { useToggleFavoriteMutation } from "../../api/products.api";
import { useDebounce } from "../../hooks/useDebounce";

const CardItem: FC<IProduct> = ({
	id,
	title,
	price,
	imgUrl,
	isFavorite,
}) => {
	const [isLiked, setIsLiked] = useState(isFavorite);

	// remove/add to cart
	const cart = useAppSelector(state => state.cart);
	const isProductInCart = cart.some(item => item.id === id);
	const dispatch = useAppDispatch();

	const handleCartItemToggle = () => {
		if (isProductInCart) {
			dispatch(removeFromCart(id));
		} else {
			dispatch(addToCart({ id, title, price, imgUrl, isFavorite }));
		}
	};

	// toggle favorite item
	const [toggleFavorite] = useToggleFavoriteMutation();
	const debouncedIsLiked = useDebounce(isLiked, 500);

	useEffect(() => {
		toggleFavorite({ id, isFavorite: debouncedIsLiked });
	}, [debouncedIsLiked]);

	const handleFavoriteItemToggle = () => {
		setIsLiked(prev => !prev);
	};

	return (
		<div className='cardItem border-gray-200 border overflow-hidden flex-shrink-0'>
			<CustomButton
				title='В закладки'
				onClick={handleFavoriteItemToggle}
				extraClass={`absolute favoritesBtn ${isLiked ? "active" : ""}`}
			>
				<HeartSvg />
			</CustomButton>
			<img
				src={imgUrl}
				width={133}
				height={112}
				alt={title}
			/>
			<p className='title mt-4'>{title}</p>
			<div className='flex justify-between items-end'>
				<div>
					<p className='priceTitle mt-4 uppercase text-gray-400 font-medium'>
						Цена:
					</p>
					<b className='price font-bold'>{`${price} руб.`}</b>
				</div>
				<CustomButton
					onClick={handleCartItemToggle}
					title='В корзину'
					extraClass={`cartItemToggleBtn ${
						isProductInCart ? "active" : ""
					}`}
				>
					{isProductInCart ? <CheckSvg /> : <PlusSvg />}
				</CustomButton>
			</div>
		</div>
	);
};

export default CardItem;
