import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
const fakeCart = [
	{
		pizzaId: 12,
		name: "Mediterranean",
		quantity: 2,
		unitPrice: 16,
		totalPrice: 32,
	},
	{
		pizzaId: 6,
		name: "Vegetable",
		quantity: 1,
		unitPrice: 13,
		totalPrice: 13,
	},
	{
		pizzaId: 11,
		name: "Spinach and Mushroom",
		quantity: 1,
		unitPrice: 15,
		totalPrice: 15,
	},
];
function Cart() {
	const cart = fakeCart;

	return (
		<div className="p-5">
			<div className="text-left p-5 ">
					<LinkButton to="/menu">&larr; Back to menu</LinkButton>
				<h2 className="text-2xl font-semibold text-orange-70 py-6">Your Cart</h2>
			</div>
			<div>
				<ul className="p-5">
					{cart.map((item) => (
						<CartItem key={item.pizzaId} item={item} />
					))}
				</ul>
			</div>

			<div className="flex items-center gap-5  ">
				<Button type="secondary" to="/order/new" >ORDER PIZZA</Button>
				<Button type="third">CLEAR CART</Button>
			</div>
		</div>
	);
}

export default Cart;
