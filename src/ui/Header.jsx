import pizza from "../assets/img/pizza.jpg";
import { useState, useEffect, useRef } from "react";
import { Bars3Icon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import Navigation from "./Navigation";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const sidebarRef = useRef(null);
	const navigate = useNavigate();

	useEffect(() => {
		function handleClickOutSide(e) {
			if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		}

		if (isOpen) {
			document.addEventListener("mousedown", handleClickOutSide);
		} else {
			document.removeEventListener("mousedown", handleClickOutSide);
		}
		return () => {
			document.removeEventListener("mousedown", handleClickOutSide);
		};
	}, [isOpen]);

	return (
		<div className=" p-5 flex items-center justify-between ">
			{/* sidebar */}
			<button onClick={() => setIsOpen(!isOpen)}>
				<Bars3Icon className=" md:hidden h-12 w-12 text-amber-800" />
			</button>
			{isOpen && (
				<div ref={sidebarRef}>
					<Sidebar setIsOpen={setIsOpen} />
				</div>
			)}

			<img
				src={pizza}
				alt="Logo"
				className=" mx-auto md:mx-0 h-20 rounded-full"
			/>

			<div className="ml-20 hidden md:block  ">
				<Navigation />
			</div>

			{/* cart icon */}
			<button
				onClick={() => navigate("/cart")}
				className="ml-auto p-2 hover:bg-orange-100 rounded-full"
			>
				<ShoppingCartIcon className="h-10 w-10 text-amber-800 mr-auto" />
			</button>
		</div>
	);
}

export default Header;
