import Button from "../../ui/Button";
import { increaseQuantity, decreaseQuantity, deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";

function UpdateItemQuantity({ id, quantity }) {
	const dispatch = useDispatch();

	function handelDecrease() {
		dispatch(decreaseQuantity(id));
		if (quantity < 2) dispatch(deleteItem(id));
	}

	return (
		<div className="flex gap-5 items-center ">
			<Button onClick={handelDecrease}>-</Button>
			<span>{quantity}</span>
			<Button onClick={() => dispatch(increaseQuantity(id))}>+</Button>
		</div>
	);
}

export default UpdateItemQuantity;
