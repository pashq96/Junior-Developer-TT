let path = require('path')
let ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');


let conf = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'main.js',
		publicPath: 'dist/'
	},
	devServer: {
		overlay: true
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				//exclude: '/node_modules/'
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					//resolve-url-loader may be chained before sass-loader if necessary
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
	    new ExtractTextPlugin('style.css'),
	    new CopyWebpackPlugin([{
			from: './src/img',
			to: './img'
		}])
	]
};

module.exports = (env, options) => {
	let production = options.mode ==='production';

	conf.devtool = production
					? false
					: 'eval-sourcemap';
	return conf;

}