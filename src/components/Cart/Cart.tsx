import { FC, useEffect } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import CartItem from "../CartItem/CartItem";
import boxPng from "../../assets/img/box.png";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";

interface CartProps {
	onCartClose: () => void;
	onCreateOrder: () => void;
}

const Cart: FC<CartProps> = ({ onCartClose, onCreateOrder }) => {
	const cart = useAppSelector(state => state.cart);
	const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
	const tax = totalPrice * 0.05;

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	});

	return (
		<>
			{cart.length ? (
				<>
					<div className='flex-1 mt-7 mb-8 flex flex-col gap-5 overflow-auto'>
						{cart.map(item => (
							<CartItem
								key={item.id}
								item={item}
							/>
						))}
					</div>
					<div>
						<div className='flex gap-2'>
							<p className='flex-shrink-0'>Итого:</p>
							<div className='border-dashed border-b border-gray-300 h-5 w-full'></div>
							<b className='flex-shrink-0'>
								{totalPrice.toLocaleString()} руб.
							</b>
						</div>
						<div className='flex gap-2 mt-4'>
							<p className='flex-shrink-0'>Налог 5%:</p>
							<div className='border-dashed border-b border-gray-300 h-5 w-full'></div>
							<b className='flex-shrink-0'>{tax.toFixed(0)} руб.</b>
						</div>
						<PrimaryButton
							onClick={onCreateOrder}
							btnText='Оформить заказ'
							extraClass='w-full mt-6'
							arrow='right'
						/>
					</div>
				</>
			) : (
				<div className='flex flex-1 flex-col justify-center items-center px-5'>
					<img
						src={boxPng}
						alt='Пусто'
						width={120}
						height={120}
					/>
					<h3 className='font-semibold text-2xl mt-5'>Корзина пустая</h3>
					<p className='mt-2 text-center text-gray-400'>
						Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.
					</p>
					<PrimaryButton
						btnText='Вернуться назад'
						extraClass='w-60 mt-10'
						arrow='left'
						onClick={onCartClose}
					/>
				</div>
			)}
		</>
	);
};

export default Cart;
