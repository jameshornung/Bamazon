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
	managerInput();
});

function managerInput(){
	inquirer.prompt([{
		name: 'input',
		message: 'What would you like to do today? 1) View Products for sale 2) View low inventory 3) Add to inventory 4) Add new product'
	}]).then(function(answer){
		if(answer.input == 1){
			connection.query('SELECT * FROM products', function(err, res){
			if (err) throw err;
			console.log('');
			console.log('Items in Store')
			for(i=0;i<res.length;i++){
				console.log('Item ID:' + res[i].id);
				console.log('Product Name: ' + res[i].ProductName);
				console.log('Price: ' + '$' + res[i].Price);
				console.log('Quantity in Stock: ' + res[i].StockQuantity);
				console.log('');
			}
			console.log('')
			newTransaction();
			})
		}
		else if(answer.input == 2){
			connection.query('SELECT * FROM products WHERE StockQuantity < 5', function(err, res){
				if (err) throw err;
				for(i=0;i<res.length;i++){
					console.log('Name: ' + res[i].ProductName);
					console.log('Product ID: ' + res[i].id);
					console.log('Quantity in Stock: ' + res[i].StockQuantity);
					console.log('');
				}
				newTransaction();
			})
		}
		else if(answer.input == 3){
			inquirer.prompt([{
				name: 'item',
				message: 'Enter the ID of the item you wish to update:'
			},{
				name: 'number',
				message: 'How many items would you like to add to the current supply?'
			}]).then(function(answer){
				connection.query('SELECT * FROM products WHERE id = ?', [answer.item], function(err, res){
						connection.query('UPDATE products SET ? Where ?', [{
							StockQuantity: res[0].StockQuantity + parseInt(answer.number)
						},{
							id: answer.item
						}], function(err, res){});
				})
				console.log('Inventory updated');
				newTransaction();
			})
		}
		else if(answer.input == 4){
			console.log('you have selected option ' + answer.input);
			newTransaction();
		}
		else{
			console.log('Please make a valid selection');
			managerInput();
		}
	})
}

function newTransaction(){
	inquirer.prompt([{
		name: 'confirm',
		message: 'Would you like to perform another transaction? (Y or N)'
	}]).then(function(answer){
		if(answer.confirm.toUpperCase() === 'Y'){
			managerInput();
		}
		else if(answer.confirm.toUpperCase() === 'N'){
			console.log('Have a good day');
			connection.end();
		}
		else{
			console.log('Please make a valid selection (Y or N)');
			newTransaction();
		}
	})
}