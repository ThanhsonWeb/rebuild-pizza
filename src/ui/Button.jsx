import { Link } from "react-router-dom";
function Button({ children, to, type = "primary", onClick, typee }) {
	const base =
		" inline-block font-semibold hover:scale-110  transition-all duration-400 cursor-pointer px-3 py-2 whitespace-nowrap";
	const style = {
		primary: "  rounded-full  text-white  bg-amber-700",
		secondary: " text-white  bg-orange-400   ",
		third: " rounded-full  bg-amber-50 border ",
	};
	const className = `${base}  ${style[type]}`;

	if (to) {
		return (
			<Link to={to}>
				<button className={className}>{children}</button>
			</Link>
		);
	}

	return (
		<button onClick={onClick} type={typee} className={className}>
			{children}
		</button>
	);
}

export default Button;
