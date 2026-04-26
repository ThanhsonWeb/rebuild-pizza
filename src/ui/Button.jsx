import { Link } from "react-router-dom";
function Button({ children, to }) {
	if (to) {
		return (
			<Link to={to}>
				<button className=" text-white font-semibold  bg-orange-400 py-2 px-3 rounded-full">
					{children}
				</button>
			</Link>
		);
	}

	return (
		<button className=" text-white font-semibold  bg-orange-600 py-1 px-2 rounded-full">
			{children}
		</button>
	);
}

export default Button;
