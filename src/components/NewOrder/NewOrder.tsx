import { FC } from "react";
import orderSuccess from "../../assets/img/order_success.png";
import PrimaryButton from "../ui/PrimaryButton/PrimaryButton";

interface NewOrderProps {
	isSuccess: boolean;
	isError: boolean;
	onDrawerClose: () => void;
}

const NewOrder: FC<NewOrderProps> = ({
	isSuccess,
	isError,
	onDrawerClose,
}) => {
	return (
		<>
			{isSuccess && (
				<div className='flex flex-1 flex-col justify-center items-center px-5'>
					<img
						src={orderSuccess}
						alt='Успех'
						width={83}
						height={120}
					/>
					<h3 className='main-color font-semibold text-2xl mt-5'>
						Заказ оформлен!
					</h3>
					<p className='mt-2 text-center text-gray-400'>
						Ваш заказ скоро будет передан курьерской доставке
					</p>
					<PrimaryButton
						btnText='Вернуться назад'
						extraClass='w-60 mt-10'
						arrow='left'
						onClick={onDrawerClose}
					/>
				</div>
			)}
			{isError && (
				<div className='flex flex-1 flex-col justify-center items-center px-5'>
					<h3 className='text-red-600 font-semibold text-2xl mt-5'>
						{"Произошла ошибка :("}
					</h3>
					<p className='mt-2 text-center text-gray-400'>
						Что-то пошло не так, попробуйте позже
					</p>
					<PrimaryButton
						btnText='Вернуться назад'
						extraClass='w-60 mt-10'
						arrow='left'
						onClick={onDrawerClose}
					/>
				</div>
			)}
		</>
	);
};

export default NewOrder;
