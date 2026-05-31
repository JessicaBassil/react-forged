import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "fs-extra";
import pc from "picocolors";
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
	const targetDir = path.resolve(String(projectName));

	const __filename = fileURLToPath(import.meta.url);
	const __dirname = path.dirname(__filename);

	// Copy selected template and common folder content
	const templateDir = path.resolve(
		__dirname,
		"../../../templates",
		String(template),
	);

	const commonDir = path.resolve(__dirname, "../../../templates", "common");

	if (fs.existsSync(targetDir)) {
		console.log(pc.red("Folder already exists"));
		process.exit(1);
	}

	fs.copySync(commonDir, targetDir);
	fs.copySync(templateDir, targetDir, {
		overwrite: true,
	});

	// git ignore and git attributes get ignored by default so we need to add them likeso
	await fs.move(
		path.join(targetDir, "_gitignore"),
		path.join(targetDir, ".gitignore"),
	);

	await fs.move(
		path.join(targetDir, "_gitattributes"),
		path.join(targetDir, ".gitattributes"),
	);

	const projectTitle = projectNameToTitle(String(projectName));
	const replacements = {
		__PROJECT_NAME__: String(projectName),
		__PROJECT_TITLE__: projectTitle,
		__SITE_URL__: "https://example.com",
	};

	await replacePlaceholdersInDir(targetDir, replacements);

	await replacePackageNames(targetDir, projectName);

	console.log(pc.green(`Project created at ${targetDir}`));
	console.log(`
Next steps:
	cd ${projectName}
	npm install
	npm run dev
	npm run prepare

Happy Coding!

`);

	console.log(
		pc.yellow(`
	Husky note:
	If this project is inside an existing Git repo (monorepo/workspace),
	make sure Husky is configured at the Git root:
	
	  git config core.hooksPath .husky
	
	Otherwise hooks may not run as expected.
	`),
	);
}

export default createProject;
