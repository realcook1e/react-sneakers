import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { FC, useState } from "react";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";

const App: FC = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	return (
		<Routes>
			<Route
				path='/'
				element={
					<Layout
						isDrawerOpen={isDrawerOpen}
						onSetDrawerOpen={setIsDrawerOpen}
					/>
				}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='/favorites'
					element={<Favorites />}
				/>
				<Route
					path='/orders'
					element={<Orders />}
				/>
			</Route>
		</Routes>
	);
};

export default App;
