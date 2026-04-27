import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder from "./features/order/CreateOrder";
import About from "./ui/About";
import Contact from "./ui/Contact";
import OrderPage from "./features/order/OrderPage";
import { loader as menuLoader } from "./features/menu/Menu";
import Error from "./ui/Error";
import { action as createOrderAction } from "./features/order/CreateOrder";
import Order from "./features/order/Order";
function App() {
	const router = createBrowserRouter([
		{
			element: <AppLayout />,
			errorElement: <Error />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/orderPage",
					element: <OrderPage />,
				},
				{
					path: "/menu",
					element: <Menu />,
					loader: menuLoader,
				},
				{
					path: "/cart",
					element: <Cart />,
				},
				{
					path: "/about",
					element: <About />,
				},
				{
					path: "/contact",
					element: <Contact />,
				},
				{
					path: "/order/new",
					element: <CreateOrder />,
					action: createOrderAction,
				},
				{
					path: "/order/orderid",
					element: <Order />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
