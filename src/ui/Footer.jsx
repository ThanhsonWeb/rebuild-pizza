import pizza from "../assets/img/pizza.jpg";
function Footer() {
	return (
		<div className="bg-gray-300 py-10">
			<h3 className="font-semibold text-xl mb-3">Notify Me The Latest Offer</h3>
			<div className="md:flex items-center justify-center gap-4 ">
				<input
					type="email"
					name="email"
					className="border p-2  rounded-full text-amber-700 bg-amber-50 mb-4 md:mb-0 "
					placeholder="Enter your email..."
				/>
            <br />
				<button className="font-semibold px-3 py-2 rounded-full bg-amber-700 text-amber-50">
					Subscribe
				</button>
			</div>

			<div className="mt-5 relative overflow ">
				<img
					src={pizza}
					alt="pizza"
					className="absolute bottom-[-20px] left-[-20px] md:h-40 h-25 rounded-full"
				/>
				<p className="text-gray-600 ">
					<span>Terms and Agreement</span> <span>Privacy Policy</span>
					<br />
					<span className="">@ 2026 Jony's Pizza</span>
				</p>
			</div>
		</div>
	);
}

export default Footer;
