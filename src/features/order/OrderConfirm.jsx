import { useSelector } from "react-redux";
import { useActionData } from "react-router-dom";
import EmptyOrder from "./EmptyOrder";
import Button from "../../ui/Button";
import OrderItem from "./OrderItem";
import { getTotalPrice } from "../cart/cartSlice";

function Order() {
	const username = useSelector((store) => store.user.username);
	const cart = useSelector((store) => store.cart.cart);
	const totalPrice = useSelector(getTotalPrice);
	console.log(cart);

	const data = useActionData();

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
			<div className="mt-5  ">
				<h2 className="text-2xl text-center">Order Summary</h2>
				<div>
					{cart.map((item) => (
						<OrderItem key={item.pizzaId} item={item} />
					))}
				</div>

				<div className="text-right mt-3">
					<p>Order Subtotal : ${totalPrice}</p>
					<p>Delivery Fee: $5.00</p>
					<h2 className="text-2xl">Total Amount : ${totalPrice + 5}</h2>
				</div>
			</div>

			<div className="mt-5 text-xl">
				<span >
					<strong className="text-amber-800">Estimated Delivery Time:</strong> 35
					minutes
				</span>
				<br />
				<Button to="/menu">Back to Menu</Button>
			</div>
		</div>
	);
}

export default Order;
