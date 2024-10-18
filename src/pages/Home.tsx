import { ChangeEvent, useState } from "react";
import { useGetProductsQuery } from "../api/mainApi";
import CardList from "../components/CardList/CardList";
import SearchSvg from "../assets/icons/search.svg?react";

const Home = () => {
	const { data, isSuccess, isLoading } = useGetProductsQuery();
	const [searchTerm, setSearchTerm] = useState("");

	const products =
		searchTerm.length > 0
			? data?.filter(product =>
					product.title.toLowerCase().includes(searchTerm.toLowerCase())
			  )
			: data;

	const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(evt.target.value);
	};

	return (
		<div className='content'>
			<div className='flex justify-between items-center'>
				<h1 className='text-3xl font-bold'>Все кроссовки</h1>
				<div className='flex items-center gap-3 w-64 rounded-xl py-3 px-4 border-gray-200 border'>
					<SearchSvg />
					<input
						className='w-full h-full focus:border-none outline-none'
						type='text'
						placeholder='Поиск...'
						value={searchTerm}
						onChange={handleSearchChange}
					/>
				</div>
			</div>

			{searchTerm.length > 0 && (
				<p className='mt-4'>
					Поиск по запросу <b>"{searchTerm}"</b>
					{products?.length ? ":" : " не дал результатов"}
				</p>
			)}
			<CardList
				products={products}
				isLoading={isLoading}
				isSuccess={isSuccess}
			/>
		</div>
	);
};

export default Home;
