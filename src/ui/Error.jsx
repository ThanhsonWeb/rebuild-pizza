import { useRouteError } from "react-router-dom";
function Error() {
	const error = useRouteError();
	console.log(error);

	return (
		<div>
			<h1>Opps ! Something went wrong.</h1>
			<p>{error.data || error.message}</p>
		</div>
	);
}

export default Error;
