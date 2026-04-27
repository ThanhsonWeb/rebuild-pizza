import { getMenu } from "../../service/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import CartOverView from "../cart/CartOverView";
import { useSelector } from "react-redux";

function Menu() {
	const menu = useLoaderData();
	const username = useSelector((store) => store.user.username);

	return (
		<>
			<div className="bg-orange-50 p-4 ">
				<div className="flex justify-around text-2xl text-orange-600 font-semibold ">
					<h2>
						<span className="text-black">Jony's</span> Menu
					</h2>
					<span>Hi !<span className="text-black"> {username}</span></span>
				</div>
				<ul className="grid  lg:grid-cols-3 md:grid-cols-2  sm:grid-cols-2 gap-4 mt-8 mb-20">
					{menu.map((pizza) => (
						<MenuItem pizza={pizza} key={pizza.id} />
					))}
				</ul>
			</div>
			<CartOverView />
		</>
	);
}

export async function loader() {
	const menu = await getMenu();
	return menu;
}
export default Menu;
