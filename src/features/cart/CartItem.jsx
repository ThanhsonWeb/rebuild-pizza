import Button from "../../ui/Button";

function CartItem({ item }) {
	const { name, quantity, unitPrice } = item;

	return (
		<div className="flex gap-4 p-5 items-center justify-between  text-xl  border-b ">
			<p>
				{quantity} x {name}
			</p>
			<span>${unitPrice}.00</span>

         

			<Button>Delete</Button>
		</div>
	);
}

export default CartItem;
