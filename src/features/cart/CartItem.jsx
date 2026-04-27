import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import { useDispatch } from "react-redux";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
	const { name, quantity, unitPrice, pizzaId } = item;

	const dispatch = useDispatch();

	return (
		<div className="md:flex gap-4 md:p-5 items-center justify-between  text-xl  border-b  pb-4 md:pb-0 mt-5 md:mt-0 ">
			<p className="text-2xl text-left mt-5">
				{quantity} x {name}
			</p>
			<div className="flex items-center md:gap-15 sm:gap-10 gap-5 mt-6 md:mt-0 ">
				<span>${unitPrice}.00</span>

				<UpdateItemQuantity id={pizzaId} quantity={quantity} />

				<Button onClick={() => dispatch(deleteItem(pizzaId))}>Delete</Button>
			</div>
		</div>
	);
}

export default CartItem;
