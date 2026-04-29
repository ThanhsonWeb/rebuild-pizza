import { useSelector } from "react-redux";
import { useActionData } from "react-router-dom";
import EmptyOrder from "./EmptyOrder";
function Order() {
	const username = useSelector((store) => store.user.username);

	const data = useActionData();
	console.log(data);

	if (!data) return <EmptyOrder />;

	return (
		<div className="p-5 text-left">
			<div className="mb-3">
				<h2 className="text-3xl">Your order is confirmed ! </h2>
				<p className="">
					Thank you, {username} ! Your delicious pizza is on its way.
				</p>
			</div>
			{/* details */}
			<div className="text-amber-900 text-xl">
				<h4>
					<strong>Customer details </strong>
				</h4>
				<p className="text-black">
					<strong className="text-amber-900 ">First name : </strong>
					{data.customer}
				</p>
				<p className="text-black">
					<strong className="text-amber-900 ">Phone Number : </strong>
					{data.phone}
				</p>
				<p className="text-black">
					<strong className="text-amber-900 ">Delivery Address : </strong>
					{data.address}
				</p>
			</div>
			{/* summary */}
			<div></div>
		</div>
	);
}

export default Order;
