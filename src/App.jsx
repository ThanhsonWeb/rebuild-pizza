import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import AppLayout from "./ui/AppLayout";
import Menu from "./features/menu/Menu";
import Cart from "./features/cart/cart";
import CreateOrder from "./features/order/CreateOrder";
import About from "./ui/About";
import Contact from "./ui/Contact";
function App() {
	const router = createBrowserRouter([
		{
			element: <AppLayout />,
			children: [
				{
					path: "/",
					element: <Home />,
				},
				{
					path: "/menu",
					element: <Menu />,
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
				},
				{
					path: "/order/orderid",
					element: <CreateOrder />,
				},
			],
		},
	]);

	return <RouterProvider router={router} />;
}

export default App;
