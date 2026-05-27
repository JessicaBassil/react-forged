const HomePage = () => {
	return (
		<section className="space-y-5">
			<p className="text-sm font-medium tracking-wide text-primary uppercase">Starter template</p>
			<h1 className="text-3xl font-semibold tracking-tight text-neutral-100 sm:text-4xl">
				You're all set
			</h1>
			<p className="max-w-md leading-relaxed text-neutral-400">
				Edit
				<code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-sm text-secondary ring-1 ring-neutral-700">
					src/pages/home/home-page.tsx
				</code>
				and start building.
			</p>
			<p className="max-w-md leading-relaxed text-neutral-400">
				<span role="img" aria-label="sparkles">
					✨{" "}
				</span>
				Pssst! Don&apos;t forget to take a peek at the{" "}
				<code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-sm text-primary ring-1 ring-neutral-700">
					README
				</code>
				files&nbsp;— they&apos;re full of helpful tips and will help you feel right at home!{" "}
				<span role="img" aria-label="books">
					📚
				</span>
			</p>
		</section>
	);
};

export default HomePage;
