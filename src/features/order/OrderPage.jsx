import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName } from "../user/userSlice";
import { useState } from "react";

function OrderPage() {
	const [username, setUsername] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();
	function handleSubmit(e) {
		e.preventDefault();
		dispatch(updateName(username));
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
				<Button onClick={handleSubmit} type="secondary">
					Proceed to menu
				</Button>
			)}
		</div>
	);
}

export default OrderPage;
