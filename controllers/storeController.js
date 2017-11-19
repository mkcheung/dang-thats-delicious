// exports.myMiddleware = (req, res, next) => {
// 	req.name = 'Mars';
// 	res.cookie('name', 'Mars is cool', {maxAge: 900000});
// 	next();
// };

exports.homePage = (req, res) =>{
	res.render('index');
};

exports.addStore = (req, res) =>{
	// res.send('It works');
	res.render('editStore', {
		title: 'Add Store'
	});
};

