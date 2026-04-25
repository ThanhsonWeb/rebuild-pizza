import { getMenu } from "../../service/apiRestaurant";
import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";

function Menu() {
	const menu = useLoaderData();
	console.log(menu);
	return (
		<div className="bg-orange-50 p-4 ">
			<div className="flex justify-around text-2xl text-orange-600 font-semibold ">
				<h2>
					<span className="text-black">Jony's</span> Menu
				</h2>
				<span>Hi !</span>
			</div>
			<ul className="grid  sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
				{menu.map((pizza) => (
					<MenuItem pizza={pizza} key={pizza.id} />
				))}
			</ul>
		</div>
	);
}

export async function loader() {
	const menu = await getMenu();
	return menu;
}
export default Menu;
