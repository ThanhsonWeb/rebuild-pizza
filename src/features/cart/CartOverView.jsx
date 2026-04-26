import Button from "../../ui/Button";
function CartOverView() {
	return (
		<div className=" fixed bottom-0 left-0 right-0 h-20 py-10 flex items-center justify-evenly bg-gray-100">
			<p> Cart Over View</p>
			<Button to="/cart">Open cart</Button>
		</div>
	);
}

export default CartOverView;
