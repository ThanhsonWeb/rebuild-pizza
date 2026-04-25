function MenuItem({ pizza }) {
	const { imageUrl: url, name, ingredients, unitPrice, soldOut } = pizza;

	return (
		<div className="flex items-center space-x-3 ">
			<img
				src={url}
				alt={name}
				className={` rounded-xl h-40 ${soldOut ? "grayscale" : ""} `}
			/>
			<div className="flex flex-col">
				<h3 className=" font-semibold text-orange-400 mb-4">{name}</h3>
				<p className="italic">{ingredients.join(" ,")}</p>
				<span className="font-semibold text-orange-700 text-xl mt-4">
					{soldOut ? "Sold out" : "$" + unitPrice}
				</span>
			<button className="mt-4 text-white font-semibold  bg-orange-600 py-1 px-2 rounded-full">
				ADD TO CART
			</button>
			</div>
		</div>
	);
}

export default MenuItem;
