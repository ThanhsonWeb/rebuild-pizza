import { NavLink } from "react-router-dom";

function Navigation() {
	return (
			<nav className=" flex flex-col md:flex-row items-center ">
				<NavLink className=" link font-semibold text-xl text-amber-800 px-4 py-2 mt-5 " to="/">
					<span >
						Home
					</span>
				</NavLink>
				<NavLink className=" link  font-semibold text-xl text-amber-800 px-4 py-2 mt-5 " to="/menu">
					<span >
						Menu
					</span>
				</NavLink>
				<NavLink className=" link font-semibold text-xl text-amber-800 px-4 py-2 mt-5 " to="/about">
					<span >
						About
					</span>
				</NavLink>
				<NavLink className=" link font-semibold text-xl text-amber-800 px-4 py-2 mt-5 " to="/contact">
					<span >
						Contact Us
					</span>
				</NavLink>
			</nav>
	);
}

export default Navigation;
