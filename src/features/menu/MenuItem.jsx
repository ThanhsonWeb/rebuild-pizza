import Button from "../../ui/Button";

function MenuItem({ pizza }) {
	const { imageUrl: url, name, ingredients, unitPrice, soldOut } = pizza;

	return (
		<div className="flex items-center justify-evenly ">
			<img
				src={url}
				alt={name}
				className={` rounded-xl h-40 ${soldOut ? "grayscale" : ""} `}
			/>
			<div className="flex flex-col w-[50%]">
				<h3 className=" font-semibold text-orange-400 mb-3">{name}</h3>
				<p className="italic ">{ingredients.join(" ,")}</p>
				<span className="font-semibold text-orange-700 text-xl my-3">
					{soldOut ? "Sold out" : "$" + unitPrice}
				</span>
			<Button >ADD TO CART</Button>
			</div>
		</div>
	);
}

export default MenuItem;
