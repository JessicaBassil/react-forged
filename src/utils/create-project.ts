import path from "node:path";
import { fileURLToPath } from "node:url";
import boxen from "boxen";
import fs from "fs-extra";
import ora from "ora";
import pc from "picocolors";
import printBrand from "./print-brand.js";
import printStep from "./print-step.js";
import replacePackageNames from "./replace-package-names.js";
import replacePlaceholdersInDir from "./replace-placeholders.js";

// Replace "my-awesome-project" with "My Awesome Project"
function projectNameToTitle(name: string): string {
	return name
		?.split(/[-_]/)
		?.filter(Boolean)
		?.map(
			(word) =>
				word?.charAt?.(0)?.toUpperCase?.() + word?.slice?.(1)?.toLowerCase?.(),
		)
		?.join(" ");
}

async function createProject({ projectName = "", template = "" }) {
	printBrand();

	const spinner = ora("Preparing forge...")?.start?.();

	const targetDir = path.resolve(String(projectName));

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	const templateDir = path.resolve(
		__dirname,
		"../../../templates",
		String(template),
	);

	const commonDir = path.resolve(__dirname, "../../../templates", "common");

	if (fs.existsSync(targetDir)) {
		spinner?.fail?.("Folder already exists");
		process.exit(1);
	}

	// Step 1: Copy base files
	printStep("Copying template files...");
	fs.copySync(commonDir, targetDir);
	fs.copySync(templateDir, targetDir, { overwrite: true });

	// Step 2: Fix git files
	printStep("Configuring git files...");
	await fs.move(
		path.join(targetDir, "_gitignore"),
		path.join(targetDir, ".gitignore"),
	);

	await fs.move(
		path.join(targetDir, "_gitattributes"),
		path.join(targetDir, ".gitattributes"),
	);

	// Step 3: Replace placeholders
	printStep("Injecting project metadata...");
	const projectTitle = projectNameToTitle(String(projectName));

	const replacements = {
		__PROJECT_NAME__: String(projectName),
		__PROJECT_TITLE__: projectTitle,
		__SITE_URL__: "https://example.com",
	};

	await replacePlaceholdersInDir(targetDir, replacements);
	await replacePackageNames(targetDir, projectName);

	// Done
	spinner?.succeed?.("Project forged successfully!");

	console.log(
		boxen(
			`
Next steps:

  cd ${projectName}
  npm install
  npm run dev
  npm run prepare

Happy hacking ⚡
`,
			{
				padding: 1,
				borderColor: "green",
				borderStyle: "round",
			},
		),
	);

	console.log(
		pc.yellow(`
Husky note:
If you're inside a monorepo/workspace:

  git config core.hooksPath .husky
`),
	);
}

export default createProject;
