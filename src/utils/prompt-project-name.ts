import { isCancel, text } from "@clack/prompts";
import validateEmpty from "./validate-empty.js";

async function promptProjectName() {
	const projectName = await text({
		message: "What is your project name?",
		placeholder: "Please enter project name",
		validate: validateEmpty,
		defaultValue: "my-project",
	});

	if (isCancel(projectName)) {
		console.log("Operation cancelled");
		process.exit(0);
	}

	return projectName;
}

export default promptProjectName;
