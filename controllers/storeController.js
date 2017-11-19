// exports.myMiddleware = (req, res, next) => {
// 	req.name = 'Mars';
// 	res.cookie('name', 'Mars is cool', {maxAge: 900000});
// 	next();
// };

exports.homePage = (req, res) =>{
	res.render('index');
};

