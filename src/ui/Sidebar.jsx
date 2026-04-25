import Navigation from "./Navigation";

function Sidebar({ setIsOpen }) {
	return (
		<div className="md:hidden fixed bg-red-50 top-0 left-0 bottom-0 right-[50%] z-10 space-y-3.5  flex items-center justify-center  ">
			<button
				className="text-3xl p-3 font-semibold absolute top-0 left-0"
				onClick={() => setIsOpen(false)}
			>
				X
			</button>
			<div className="flex flex-col">
				<Navigation />
			</div>
		</div>
	);
}

export default Sidebar;
