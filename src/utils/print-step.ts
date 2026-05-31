import pc from "picocolors";

function printStep(step: string) {
	console.log(pc.cyan(`› ${step}`));
}

export default printStep;
