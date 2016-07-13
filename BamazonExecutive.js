var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: '',
	database: 'Bamazon_db'
});

//Establish Connection
connection.connect(function(err){
	if (err) throw err;
	console.log('connected as id: ' + connection.threadId)
	executiveOptions();
});

function executiveOptions(){
	inquirer.prompt([{
		name: 'input',
		type: 'list',
		message: 'What would you like to do today?',
		choices: ['1) View Sales By Department', '2) Create New Department']
	}]).then(function(answer){
		if(answer.input === '1) View Sales By Department'){
			console.log('view sales')
		}
		else{
			console.log('create new department')
		}
	})
};