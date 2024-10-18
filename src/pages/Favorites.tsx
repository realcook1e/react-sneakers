import { FC } from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../components/CardList/CardList";
import { useGetProductsQuery } from "../api/mainApi";
import CustomButton from "../components/ui/CustomButton/CustomButton";
import BackArrowSvg from "../assets/icons/back_arrow.svg?react";
import smilePng from "../assets/img/smile_sad.png";
import PrimaryButton from "../components/ui/PrimaryButton/PrimaryButton";

const Favorites: FC = () => {
	const {
		data: products,
		isSuccess,
		isLoading,
		isError,
	} = useGetProductsQuery(true);

	const navigate = useNavigate();

	const handleBackClick = () => {
		navigate(-1);
	};

	return (
		<>
			{isSuccess && products?.length > 0 && (
				<div className='content'>
					<div className='flex items-center gap-5'>
						<CustomButton
							onClick={handleBackClick}
							title='Назад'
						>
							<BackArrowSvg />
						</CustomButton>
						<h1 className='text-3xl font-bold'>Мои закладки</h1>
					</div>
					<CardList
						products={products}
						isLoading={isLoading}
						isSuccess={isSuccess}
					/>
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
						{"Закладок нет :("}
					</h2>
					<p className='text-center text-gray-400 mt-2'>
						Вы ничего не добавляли в закладки
					</p>
					<PrimaryButton
						btnText='Вернуться назад'
						extraClass='w-60 mt-16'
						arrow='left'
						onClick={handleBackClick}
					/>
				</div>
			)}
		</>
	);
};

export default Favorites;
