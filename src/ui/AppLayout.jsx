import CartOverView from "../features/cart/CartOverView";
import Header from "./Header";
import { Outlet } from "react-router-dom";
function AppLayout() {
	return (
		<div>
			<Header />
			<h1>APPlayout</h1>
			<Outlet />
			<CartOverView />
		</div>
	);
}

export default AppLayout;
