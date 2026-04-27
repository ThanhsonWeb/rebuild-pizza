import LinkButton from "../../ui/LinkButton";
function EmptyCart() {
	return (
		<div className="text-2xl mt-20">
			<LinkButton to="/menu">&larr; Back to menu</LinkButton>
			<h2 className="mt-10">Your cart is still empty. Start adding some pizzas :)</h2>
		</div>
	);
}

export default EmptyCart;
