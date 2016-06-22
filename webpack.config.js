module.exports = {
	entry: ['babel-polyfill', 'whatwg-fetch', __dirname + '/app/entry.js'],
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.scss$/, loader: 'style!css?modules!sass' },
			{ test: /\.css$/, loader: 'style!css?modules' },
		]
	}
};
