module.exports={
	entry: {
		App: "./public/js/scripts/App.js",
		Vendor:"./public/js/scripts/Vendor.js"
	},
	output: {
		path: require('path').resolve("./public/js/scripts"),
		filename:"[name].js"
	},
	module:{
		loaders:[
			{
				loader:'babel-loader',
				query:{
					presets:['es2015']
				},
				test:/\.js$/,
				exclude:/node_modules/
			}
		]
	}
}