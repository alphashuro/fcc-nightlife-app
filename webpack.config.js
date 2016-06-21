module.exports = {
	entry: __dirname + '/app/entry.js',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
		publicPath: '/build',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { "presets": ["es2016", "stage-0", "react"] } },
			{ test: /\.scss$/, loader: 'style!css?modules!sass' },
		]
	}
};
