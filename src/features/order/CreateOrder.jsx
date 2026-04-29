import Button from "../../ui/Button";
import { Form } from "react-router-dom";
import { useSelector } from "react-redux";
import { getCart } from "../cart/cartSlice";
import EmptyCart from "../cart/EmptyCart";

function CreateOrder() {
	const { username } = useSelector((store) => store.user);
	const cart = useSelector(getCart);
	console.log(cart);

	if (!cart || cart.length === 0) return <EmptyCart />;
	return (
		<div className="md:p-10 p-6 flex flex-col justify-center">
			<h2 className="text-left text-4xl md:text-5xl tracking-wide">
				Ready to order ? let's go
			</h2>
			{/* b1 : use Form */}
			<Form method="POST" action="/confirm" className="mt-10  space-y-6 ">
				<div className="flex flex-col md:flex-row gap-6   ">
					<label className="text-left text-xl sm:text-2xl md:text-3xl ">
						First Name
					</label>
					<input
						type="text"
						className="border px-4 py-2  text-xl w-[100%] md:w-[70%] ml-auto rounded-full "
						name="customer"
						defaultValue={username}
						required
					/>
				</div>
				<div className="flex  flex-col md:flex-row gap-6  ">
					<label className="text-left text-xl sm:text-2xl md:text-3xl whitespace-nowrap">
						Phone Number
					</label>
					<input
						type="tel"
						className="border px-4 py-2  text-xl w-[100%] md:w-[70%] ml-auto rounded-full "
						name="phone"
						required
					/>
				</div>
				<div className="flex items-center justify-between flex-col md:flex-row gap-6  ">
					<div className="w-full md:w-0 text-start ">
						<label className="text-left text-xl sm:text-2xl md:text-3xl  ">
							Address
						</label>
					</div>

					<input
						type="text"
						className="border px-4 py-2  text-xl w-[100%] md:w-[70%] ml-auto rounded-full "
						name="address"
						required
					/>

					<span className="absolute right-[5%]  ">
						{/* b1: click button -> fetch */}
						<Button
							onClick={(e) => {
								e.preventDefault();
							}}
						>
							GET POSITION
						</Button>
					</span>
				</div>

				{/* <Button typee="submit">Order now</Button> */}
				<button
					className=" rounded-full  text-white  bg-amber-700 p-4"
					type="submit"
				>
					Order now
				</button>
			</Form>
		</div>
	);
}

export async function action({ request }) {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);
	return data; // this is what useActionData will read
}

export default CreateOrder;
