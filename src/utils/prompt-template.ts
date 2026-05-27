import { isCancel, select } from "@clack/prompts";

async function promptTemplate() {
	const template = await select({
		message: "Select a template",
		options: [
			{
				label: "Vite + Biome",
				value: "vite-biome",
			},
		],
	});

	if (isCancel(template)) {
		process.exit(0);
	}

	return template;
}

export default promptTemplate;
