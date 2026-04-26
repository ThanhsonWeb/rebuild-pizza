import pizza2 from "../assets/img/pizza2.png";
import pizza3 from "../assets/img/pizza3.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
function Home() {
	return (
		<div>
			<div className="relative">
				<Link to="/orderPage">
					<img src={pizza2} alt="pizza" className="w-full" />
					<button className="px-4 py-2 rounded-full text-white  text-xl font-semibold bg-amber-700 cursor-pointer absolute bottom-[0rem] ">
						Order now
					</button>
				</Link>
			</div>
			<img src={pizza3} alt="pizza" className="w-full" />

			<Footer />
		</div>
	);
}

export default Home;
