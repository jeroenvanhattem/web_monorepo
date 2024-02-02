import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"../../packages/ui/components/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
		},
	},
	plugins: [],
};
export default config;
