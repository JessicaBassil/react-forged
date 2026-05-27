import { Link } from "react-router-dom";

const NotFoundPage = () => {
	return (
		<section className="space-y-5 text-center">
			<p className="text-sm font-medium tracking-wide text-primary uppercase">404</p>
			<h1 className="text-3xl font-semibold tracking-tight text-neutral-100">Page not found</h1>
			<p className="text-neutral-400">
				The page you are looking for does not exist or has been moved.
			</p>
			<Link
				to="/"
				className="inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-white"
			>
				Back to home
			</Link>
		</section>
	);
};

export default NotFoundPage;
