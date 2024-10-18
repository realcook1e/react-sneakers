import { Outlet } from "react-router-dom";
import { Dispatch, FC, SetStateAction } from "react";
import Header from "../components/Header/Header";
import Drawer from "../components/Drawer/Drawer";

interface LayoutProps {
	isDrawerOpen: boolean;
	onSetDrawerOpen: Dispatch<SetStateAction<boolean>>;
}

const Layout: FC<LayoutProps> = ({ isDrawerOpen, onSetDrawerOpen }) => {
	const handleDrawerOpen = () => {
		onSetDrawerOpen(true);
	};

	const handleDrawerClose = () => {
		onSetDrawerOpen(false);
	};

	return (
		<>
			<div className='wrapper'>
				<Header onDrawerOpen={handleDrawerOpen} />
				<Outlet />
			</div>
			{isDrawerOpen && <Drawer onDrawerClose={handleDrawerClose} />}
		</>
	);
};

export default Layout;
