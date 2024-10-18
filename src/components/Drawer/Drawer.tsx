import { FC, MouseEvent, useEffect, useState } from "react";
import CustomButton from "../ui/CustomButton/CustomButton";
import CloseSvg from "../../assets/icons/close.svg?react";
import Cart from "../Cart/Cart";
import { useCreateOrderMutation } from "../../api/orders.api";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { clearCart } from "../../store/cart/cart.slice";
import NewOrder from "../NewOrder/NewOrder";
import { persistor } from "../../store/store";

interface DrawerProps {
	onDrawerClose: () => void;
}

const Drawer: FC<DrawerProps> = ({ onDrawerClose }) => {
	const [step, setStep] = useState<"cart" | "order">("cart");

	const products = useAppSelector(state => state.cart);
	const dispatch = useAppDispatch();

	const [createOrder, createOrderResult] = useCreateOrderMutation();

	useEffect(() => {
		document.body.style.overflow = "hidden";

		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	const handleCreateOrder = async () => {
		const res = await createOrder({ products });
		setStep("order");
		if (!res.error) {
			dispatch(clearCart());
			persistor.purge();
		}
	};

	return (
		<div
			className='overlay w-full h-full absolute top-0 left-0 z-40'
			onClick={onDrawerClose}
		>
			<div
				className='drawer h-full bg-white absolute right-0 top-0 p-8 flex flex-col'
				onClick={(evt: MouseEvent<HTMLElement>) => evt.stopPropagation()}
			>
				<div className='flex justify-between items-center'>
					<h2 className='font-bold text-2xl'>Корзина</h2>
					<CustomButton
						extraClass='closeBtn'
						onClick={onDrawerClose}
					>
						<CloseSvg />
					</CustomButton>
				</div>
				{step === "cart" ? (
					<Cart
						onCartClose={onDrawerClose}
						onCreateOrder={handleCreateOrder}
					/>
				) : (
					<NewOrder
						isSuccess={createOrderResult.isSuccess}
						isError={createOrderResult.isError}
						onDrawerClose={onDrawerClose}
					/>
				)}
			</div>
		</div>
	);
};

export default Drawer;
