import pizza from "../assets/img/pizza.jpg";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
function Header() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className=" p-5 flex items-center ">
			{/* sidebar */}
			<button onClick={() => setIsOpen(!isOpen)}>
				<Bars3Icon className=" md:hidden h-8 w-8 text-amber-800" />
			</button>
			{isOpen && <Sidebar setIsOpen={setIsOpen} />}

			<img
				src={pizza}
				alt="Logo"
				className=" mx-auto md:mx-0 h-20 rounded-full"
			/>

			<div className="ml-20 hidden md:block  ">
				<Navigation />
			</div>
		</div>
	);
}

export default Header;
