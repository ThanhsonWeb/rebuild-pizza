function OrderPage() {
   

	return (
		<div>
			<h1>
				Son Jony's <span className="text-orange-400">Pizza</span> <br />{" "}
				<span className="text-orange-700">
					sizzling hot right when you want it
				</span>{" "}
			</h1>
			<p>Hey there ! What you we call you ?</p>

			<input
				type="text"
				name="text"
				className="border p-2 md:w-[20rem]  rounded-full text-amber-700 bg-amber-50 my-5 "
				placeholder="Enter your name..."
			/>
		</div>
	);
}

export default OrderPage;
