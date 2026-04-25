function Button({children}) {
	return (
		<button className=" text-white font-semibold  bg-orange-600 py-1 px-2 rounded-full">
			{children}
		</button>
	);
}

export default Button;
