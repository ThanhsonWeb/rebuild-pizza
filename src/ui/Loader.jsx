function Loader() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="flex gap-4">
				<div className="h-5 w-5 rounded-full bg-red-400 animate-bounce [animation-delay:0ms]"></div>
				<div className="h-5 w-5 rounded-full bg-red-400 animate-bounce [animation-delay:200ms]"></div>
				<div className="h-5 w-5 rounded-full bg-red-400 animate-bounce [animation-delay:400ms]"></div>
			</div>
		</div>
	);
}

export default Loader;
