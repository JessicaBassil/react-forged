import { isCancel, select } from "@clack/prompts";

async function promptTemplate() {
	const template = await select({
		message: "Select a template",
		options: [
			{
				label: "Vite + Biome",
				value: "vite-biome",
				hint: "React, TypeScript, Tailwind, and Biome",
			},
			{
				label: "Vite + ESLint + Prettier",
				value: "vite-eslint",
				hint: "React, TypeScript, Tailwind, ESLint, and Prettier",
			},
			{
				label: "RSBuild + Biome (Coming soon)",
				value: "rsbuild-biome",
				hint: "React, TypeScript, Tailwind, and Biome on RSBuild",
				disabled: true,
			},
			{
				label: "RSBuild + ESLint + Prettier (Coming soon)",
				value: "rsbuild-eslint",
				hint: "React, TypeScript, Tailwind, ESLint, and Prettier on RSBuild",
				disabled: true,
			},
		],
	});

	if (isCancel(template)) {
		process.exit(0);
	}

	return template;
}

export default promptTemplate;
