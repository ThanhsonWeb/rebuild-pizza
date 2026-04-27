import LinkButton from "../../ui/LinkButton";
import CartItem from "./CartItem";
import Button from "../../ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
	const cart = useSelector((store) => store.cart.cart);
	const username = useSelector((store) => store.user.username);

	const dispatch = useDispatch();

	if (cart.length === 0) return <EmptyCart />;
	return (
		<div className="p-5">
			<div className="text-left p-5 ">
				<LinkButton to="/menu">&larr; Back to menu</LinkButton>
				<h2 className="text-2xl font-semibold text-orange-70 py-6">
					Your Cart - {username}
				</h2>
			</div>
			<div>
				<ul className="p-5">
					{cart.map((item) => (
						<CartItem key={item.pizzaId} item={item} />
					))}
				</ul>
			</div>

			<div className="flex items-center gap-5 mt-8 ">
				<Button type="secondary" to="/order/new">
					ORDER PIZZA
				</Button>
				<Button onClick={() => dispatch(clearCart())} type="third">
					CLEAR CART
				</Button>
			</div>
		</div>
	);
}

export default Cart;
