const SKIP_DIRS = new Set(["node_modules", ".git", "dist"]);
const SKIP_FILES = new Set(["package-lock.json"]);

const TEXT_FILE_NAMES = new Set([
	".env.example",
	".gitkeep",
	"LICENSE",
	"robots.txt",
	"sitemap.xml",
]);

const TEXT_EXTENSIONS = new Set([
	".html",
	".tsx",
	".ts",
	".js",
	".jsx",
	".json",
	".md",
	".txt",
	".xml",
	".css",
	".mdc",
]);

export { SKIP_DIRS, SKIP_FILES, TEXT_EXTENSIONS, TEXT_FILE_NAMES };
