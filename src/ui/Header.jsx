import pizza from "../assets/img/pizza.jpg";
import {NavLink} from "react-router-dom";
function Header() {
	return (
		<div className=" px-5 py-10 flex items-center  ">
			<img src={pizza} alt="Logo" className="h-20 rounded-full" />
			<div className="ml-20">
			   <nav className="flex items-center " >
   				<NavLink to="/" ><span className="font-semibold text-xl text-amber-800 px-4 py-2" >Home</span></NavLink>
   				<NavLink to="/menu" ><span className="font-semibold text-xl text-amber-800 px-4 py-2" >Menu</span></NavLink>
   				<NavLink to="/about" ><span className="font-semibold text-xl text-amber-800 px-4 py-2" >About</span></NavLink>
   				<NavLink to="/" ><span className="font-semibold text-xl text-amber-800 px-4 py-2" >Contact Us</span></NavLink>
   			</nav>
			</div>
		</div>
	);
}

export default Header;
