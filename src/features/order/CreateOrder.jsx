import Button from "../../ui/Button";
function CreateOrder() {
	return (
		<div className="md:p-10 p-6 flex flex-col justify-center">
			<h2 className="text-left text-4xl md:text-5xl tracking-wide">
				Ready to order ? let's go
			</h2>
			<form className="mt-10 text-3xl space-y-6 ">
				<div className="flex flex-col md:flex-row gap-6   ">
					<label htmlFor="name" className="text-left">
						First Name
					</label>
					<input
						type="text"
						id="name"
						className="border px-4 py-2  text-xl w-[100%] md:w-[70%] ml-auto rounded-full "
						required
					/>
				</div>
				<div className="flex  flex-col md:flex-row gap-6  ">
					<label htmlFor="num" className="text-left">
						{" "}
						Phone Number
					</label>
					<input
						type="tel"
						id="num"
						className="border px-4 py-2  text-xl w-[100%] md:w-[70%] ml-auto rounded-full "
						required
					/>
				</div>
				<div className="flex flex-col md:flex-row gap-6  ">
					<label htmlFor="address" className="text-left">
						Address
					</label>
					<input
						type="text"
						id="address"
						className="border px-4 py-2  text-xl w-[100%] md:w-[70%] ml-auto rounded-full "
						required
					/>
				</div>

				<Button to="/order/id">Order now</Button>
			</form>
		</div>
	);
}

export default CreateOrder;
