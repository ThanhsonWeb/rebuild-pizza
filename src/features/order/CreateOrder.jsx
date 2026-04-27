import Button from "../../ui/Button";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../service/apiRestaurant";
import { useSelector } from "react-redux";

function CreateOrder() {
	const username = useSelector((store) => store.user.username);

	return (
		<div className="md:p-10 p-6 flex flex-col justify-center">
			<h2 className="text-left text-4xl md:text-5xl tracking-wide">
				Ready to order ? let's go
			</h2>
			{/* b1 : use Form */}
			<Form method="POST" className="mt-10 text-2xl md:text-3xl space-y-6 ">
				<div className="flex flex-col md:flex-row gap-6   ">
					<label htmlFor="name" className="text-left">
						First Name
					</label>
					<input
						type="text"
						value={username}
						id="name"
						className="border px-4 py-2  text-xl w-[100%] md:w-[70%] ml-auto rounded-full "
						name="customer"
						required
					/>
				</div>
				<div className="flex  flex-col md:flex-row gap-6  ">
					<label htmlFor="num" className="text-left">
						Phone Number
					</label>
					<input
						type="tel"
						id="num"
						className="border px-4 py-2  text-xl w-[100%] md:w-[70%] ml-auto rounded-full "
						name="phone"
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
						name="address"
						required
					/>
				</div>

				<Button>Order now</Button>
			</Form>
		</div>
	);
}

// b2: new form submit ->  call this action -> request send to the server
export async function action({ request }) {
	const formData = await request.formData(); //to extract the submitted values (name,number,address)
	const data = Object.fromEntries(formData);
	// console.log(data); // name , number, address

	const order = {
		...data,
	};

	const newOrder = await createOrder(order);

	return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
