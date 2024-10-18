import { FC } from "react";
import CartSvg from "../../assets/icons/cart.svg?react";
import HeartSvg from "../../assets/icons/heart.svg?react";
import ProfileSvg from "../../assets/icons/profile.svg?react";
import logoPng from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector";

interface HeaderProps {
	onDrawerOpen: () => void;
}

const Header: FC<HeaderProps> = ({ onDrawerOpen }) => {
	const cart = useAppSelector(state => state.cart);

	return (
		<header className='header flex justify-between p-11 items-center border-b border-gray-200'>
			<Link to='/'>
				<div className='leftHeader flex gap-4 items-center'>
					<img
						src={logoPng}
						alt='logo'
						width={40}
						height={40}
					/>
					<div className='logoText'>
						<h2 className='title uppercase text-xl font-bold'>
							React Sneakers
						</h2>
						<p className='slogan font-normal text-sm leading-none'>
							Магазин лучших кроссовок
						</p>
					</div>
				</div>
			</Link>
			<div className='rightHeader'>
				<ul className='menu flex gap-8 items-center max-md:flex-col'>
					<li
						className='flex gap-2 items-center cursor-pointer'
						onClick={onDrawerOpen}
					>
						<CartSvg />
						<span className='font-semibold'>
							{cart.length
								? cart.reduce((acc, item) => acc + item.price, 0)
								: 0}{" "}
							руб.
						</span>
					</li>
					<Link to='/favorites'>
						<li className='flex gap-2 items-center'>
							<HeartSvg />
							<span>Закладки</span>
						</li>
					</Link>
					<Link to='/orders'>
						<li className='flex gap-2 items-center'>
							<ProfileSvg />
							<span>Профиль</span>
						</li>
					</Link>
				</ul>
			</div>
		</header>
	);
};

export default Header;
