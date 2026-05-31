import path from "node:path";
import fs from "fs-extra";

const replacePackageNames = async (targetDir: string, projectName: string) => {
	const packageJsonPath = path.join(targetDir, "package.json");
	const packageJson = await fs.readJson(packageJsonPath);

	if (packageJson) {
		packageJson.name = projectName;
		await fs.writeJson(packageJsonPath, packageJson, {
			spaces: 4,
		});
	}

	const packageLockPath = path.join(targetDir, "package-lock.json");
	const packageLock = await fs.readJson(packageLockPath);

	if (packageLock) {
		if ("name" in packageLock) {
			packageLock.name = projectName;
		}

		if (packageLock.packages?.[""]) {
			packageLock.packages[""].name = projectName;
		}

		await fs.writeJson(packageLockPath, packageLock, {
			spaces: 4,
		});
	}
};

export default replacePackageNames;
