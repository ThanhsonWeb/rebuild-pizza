import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import Loader from "./Loader";
function AppLayout() {
	const nav = useNavigation();

	const isLoading = nav.state === "loading";

	return (
		<div>
			{isLoading && <Loader />}
			<Header />
			<Outlet />
		</div>
	);
}

export default AppLayout;
