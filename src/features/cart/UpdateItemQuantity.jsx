import Button from "../../ui/Button";
import { increaseQuantity } from "./cartSlice";
import { useDispatch } from "react-redux";
import { decreaseQuantity } from "./cartSlice";

function UpdateItemQuantity({ id, quantity }) {
	const dispatch = useDispatch();

	return (
		<div className="flex gap-5 items-center ">
			<Button onClick={() => dispatch(decreaseQuantity(id))}>-</Button>
			<span>{quantity}</span>
			<Button onClick={() => dispatch(increaseQuantity(id))}>+</Button>
		</div>
	);
}

export default UpdateItemQuantity;
