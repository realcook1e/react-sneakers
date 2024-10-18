import { FC } from "react";
import CardItem from "../CardItem/CardItem";
import { IProduct } from "../../types/products.type";
import SkeletonLoader from "../ui/SkeletonLoader/SkeletonLoader";

interface CardListProps {
	products: IProduct[] | undefined;
	isLoading: boolean;
	isSuccess: boolean;
}

const CardList: FC<CardListProps> = ({
	products,
	isLoading,
	isSuccess,
}) => {
	return (
		<div className='cardList'>
			<div className='mt-10 flex gap-10 items-center flex-wrap'>
				{isLoading &&
					Array.from({ length: 8 }).map((_, index) => (
						<div
							className='cardSkeleton border-gray-200 border overflow-hidden flex-shrink-0'
							key={index}
						>
							<SkeletonLoader />
						</div>
					))}
				{isSuccess &&
					products?.map(product => (
						<CardItem
							key={product.id}
							{...product}
						/>
					))}
			</div>
		</div>
	);
};

export default CardList;
