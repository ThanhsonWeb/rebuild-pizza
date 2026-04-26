import { Link } from "react-router-dom";
function Button({ children, to, type = "primary" }) {
	const base = " inline-block font-semibold rounded-full hover:scale-110  transition-all duration-400 cursor-pointer px-3 py-2";
	const style = {
		primary: "  text-white  bg-amber-700",
		secondary: " text-white  bg-orange-500 ",
		third : " bg-amber-50 border "
	};
	const className = `${base}  ${style[type]}`;

	if (to) {
		return (
			<Link to={to}>
				<button className={className}>{children}</button>
			</Link>
		);
	}

	return <button className={className}>{children}</button>;
}

export default Button;
