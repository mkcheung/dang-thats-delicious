const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  // res.send('Hey! It works!');
  // const wes = {name:'Mars', age:37};
  // res.json(wes);
  // res.render('hello');

	//to pass information to the template:
	res.render('hello', {
		name:'Mars',
		age:37,
		doggy:'Buttercup',
		title:'I Love Food'
	});

});

router.get('/reverse/:name', (req, res) => {
	// res.send('it works ' + req.params.name + '!');
	const temp = [...req.params.name].reverse().join('');
	res.send(temp);
});

module.exports = router;
