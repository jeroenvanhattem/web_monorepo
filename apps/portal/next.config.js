const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true,
		externalDir: true,
	},
	sassOptions: {
		includePaths: ["./src/style"],
	},
	webpack: (config, options) => {
		// Fix issues with react-query:
		if (options.isServer) {
			config.externals = ["@tanstack/react-query", ...config.externals];
		}
		config.resolve.alias["@tanstack/react-query"] = path.resolve(
			"./node_modules/@tanstack/react-query"
		);

		return config;
	},
};

module.exports = nextConfig;
