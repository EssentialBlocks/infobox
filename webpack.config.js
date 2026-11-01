const path = require("path");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

const plugins = defaultConfig.plugins.filter(
	(plugin) =>
		plugin.constructor.name != "MiniCssExtractPlugin" &&
		plugin.constructor.name != "CleanWebpackPlugin"
);

let allEntries = {
	dist: "./src/index.js",
};

const config = {
	...defaultConfig,
	entry: allEntries,
	output: {
		path: path.resolve(__dirname),
		filename: "[name]/index.js",
	},
	plugins: [
		...plugins,
		new MiniCSSExtractPlugin({
			// style.scss is split into its own chunk; everything else is editor-only.
			filename: ({ chunk }) =>
				chunk.name === "dist" ? "dist/editor.css" : "dist/style.css",
		}),
	],
};

module.exports = config;
