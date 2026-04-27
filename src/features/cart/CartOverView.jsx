import Button from "../../ui/Button";
import { getTotalQuantity, getTotalPrice } from "./cartSlice";
import { useSelector } from "react-redux";

function CartOverView() {
	const totalQuantity = useSelector(getTotalQuantity);
	const totalPrice = useSelector(getTotalPrice);

	return (
		<div className=" fixed bottom-0 left-0 right-0 h-20 py-10 flex items-center justify-evenly bg-gray-100">
			<div className="flex gap-10 font-semibold text-2xl tracking-wide" >
				<p> {totalQuantity} Pizza's</p>
				<p> ${ totalPrice}.00   </p>
			</div>
			<Button type="secondary" to="/cart">
				Open cart
			</Button>
		</div>
	);
}

export default CartOverView;
