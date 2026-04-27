import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";

function CartItem({ item }) {
	const { name, quantity, unitPrice, pizzaId } = item;

	const dispatch = useDispatch();

	return (
		<div className="flex gap-4 p-5 items-center justify-between  text-xl  border-b ">
			<p>
				{quantity} x {name}
			</p>
			<span>${unitPrice}.00</span>

			<Button onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
		</div>
	);
}

export default CartItem;
