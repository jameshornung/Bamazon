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
			console.log('');
			connection.query('SELECT * FROM departments', function(err, res){
				console.log('SALES BY DEPARTMENT');
				for(i=0; i<res.length; i++){
					var profit = res[i].TotalSales - res[i].OverheadCost;
					console.log('Department ID: ' + res[i].DepartmentId + ' | ' + 'Department Name: ' + res[i].DepartmentName);
					console.log('Overhead Costs: ' + res[i].OverheadCost);
					console.log('Total Sales: ' + res[i].TotalSales);
					console.log('Total Profit: ' + profit);
					console.log('-----------------');
				}
			})
		}
		else{
			console.log('create new department')
		}
	})
};