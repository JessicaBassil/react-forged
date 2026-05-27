import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<div className="flex min-h-screen flex-col bg-neutral-950 text-neutral-100">
			<header className="border-b border-neutral-800 bg-neutral-900 px-6 py-4">
				<div className="mx-auto flex max-w-2xl items-center gap-3">
					<img src="/favicon.svg" alt="" className="size-7 shrink-0" width={28} height={28} />
					<span className="font-semibold tracking-tight text-primary">__PROJECT_TITLE__</span>
				</div>
			</header>

			<main className="mx-auto w-full max-w-2xl flex-1 px-6 py-20">
				<Outlet />
			</main>
		</div>
	);
};

export default RootLayout;
