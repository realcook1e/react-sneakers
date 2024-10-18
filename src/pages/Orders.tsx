import { FC } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../components/ui/PrimaryButton/PrimaryButton";
import smilePng from "../assets/img/smile_beg.png";
import BackArrowSvg from "../assets/icons/back_arrow.svg?react";
import CardList from "../components/CardList/CardList";
import CustomButton from "../components/ui/CustomButton/CustomButton";
import { useGetOrdersQuery } from "../api/orders.api";

const Orders: FC = () => {
	const {
		data: orders,
		isSuccess,
		isLoading,
		isError,
	} = useGetOrdersQuery();

	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};

	return (
		<>
			{isSuccess && orders?.length > 0 && (
				<div className='content'>
					<div className='flex items-center gap-5'>
						<CustomButton
							onClick={handleBackClick}
							title='Назад'
						>
							<BackArrowSvg />
						</CustomButton>
						<h1 className='text-3xl font-bold'>Мои покупки</h1>
					</div>
					{orders.map(order => (
						<div className='mt-10'>
							<h2 className='text-2xl font-bold'>Заказ #{order.id}</h2>
							<CardList
								products={order.products}
								isLoading={isLoading}
								isSuccess={isSuccess}
							/>
						</div>
					))}
				</div>
			)}
			{isError && (
				<div className='h-screen w-full flex flex-col place-items-center justify-center'>
					<img
						src={smilePng}
						alt='Грустное эмодзи'
						width={70}
						height={70}
					/>
					<h2 className='mt-7 font-semibold text-2xl'>
						У вас нет заказов
					</h2>
					<p className='text-center text-gray-400 mt-2'>
						Вы нищеброд?
						<br />
						Оформите хотя бы один заказ.
					</p>
					<PrimaryButton
						btnText='Вернуться назад'
						extraClass='w-60 mt-10'
						arrow='left'
						onClick={handleBackClick}
					/>
				</div>
			)}
		</>
	);
};

export default Orders;
