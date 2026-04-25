import { useState } from "react";
import Button from "../../ui/Button";
import { Link, useNavigate } from "react-router-dom";

function OrderPage() {
	const [username, setUsername] = useState("");
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();
		navigate("/menu");
	}

	return (
		<div>
			<h1>
				Son Jony's <span className="text-orange-400">Pizza</span> <br />{" "}
				<span className="text-orange-700">
					sizzling hot right when you want it
				</span>{" "}
			</h1>
			<p>Hey there ! What you we call you ?</p>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="text"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
					className="border p-2 md:w-[20rem]  rounded-full text-amber-700 bg-amber-50 my-5 "
					placeholder="Enter your name..."
				/>
			</form>

			{username !== "" && (
				<Link to="/menu">
					<Button>Proceed to menu</Button>
				</Link>
			)}
		</div>
	);
}

export default OrderPage;
