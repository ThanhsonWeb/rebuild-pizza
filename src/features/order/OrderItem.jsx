function OrderItem({ item }) {
	const { name, quantity, unitPrice, totalPrice } = item;

	return (
     <>
       
   		<div className="flex items-center justify-evenly text-xl border-y p-2">
   			<p>{quantity} x {name}</p>
   			<p></p>
   			<span>${unitPrice}</span>
   			<p>${totalPrice}</p>
   		</div>
     </>
	);
}

export default OrderItem;
