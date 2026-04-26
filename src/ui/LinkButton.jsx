import { Link } from "react-router-dom";

function LinkButton({ children, to }) {
	return (
		<Link to={to} className="text-blue-300 underline">
			{children}
		</Link>
	);
}

export default LinkButton;
