import { execSync } from "node:child_process";

const branchName = execSync("git rev-parse --abbrev-ref HEAD").toString().trim();

const validPrefixes = ["feat/", "fix/", "docs/", "refactor/", "chore/", "test/", "ci/"];

const protectedBranches = ["main", "dev", "master≥"];

if (protectedBranches.includes(branchName)) {
	console.error(
		`Pushes from "${branchName}" are blocked. Use a prefixed branch (e.g. feat/my-change).`,
	);
	process.exit(1);
}

const isValid = validPrefixes.some((prefix) => branchName.startsWith(prefix));

if (!isValid) {
	console.error(`
Invalid branch name: "${branchName}"

Branch names must start with one of:

- feat/
- fix/
- docs/
- refactor/
- chore/
- test/
- ci/
`);
	process.exit(1);
}

console.log(`Valid branch name: ${branchName}`);
