import LinkButton from "../../ui/LinkButton"

function EmptyOrder() {
	return (
		<div className="text-2xl mt-20">
			<h2>No order Data found 🤔</h2>
			<LinkButton to="/order/new">&larr; Back to Order</LinkButton>
		</div>
	);
}

export default EmptyOrder;
