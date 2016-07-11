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
});

connection.query('SELECT * FROM products', function(err, res){
if (err) throw err;
console.log('=================================================');
console.log('Items in Store');
console.log('=================================================');

for(i=0;i<res.length;i++){
	console.log('Item ID:' + res[i].id + ' Product Name: ' + res[i].ProductName + ' Price: ' + '$' + res[i].Price)
}
console.log('')
console.log('=================================================');
placeOrder();
})


//FUNCTIONS
//=============================================================================
function placeOrder(){
	inquirer.prompt([{
		name: 'selectId',
		message: 'Please enter the ID of the product you wish to purchase'
	},{
		name:'selectQuantity',
		message: 'How many of this product would you like to order?'
	}]).then(function(answer){
	connection.query('SELECT * FROM products WHERE id = ?', [answer.selectId], function(err, res){
		if(answer.selectQuantity > res[0].StockQuantity){
			console.log('Insufficient Quantity');
			console.log('This order has been cancelled');
			newOrder();
		}
		else{
			console.log('Thanks for your order');
			console.log('You owe $' + res[0].Price * answer.selectQuantity);
			console.log('');
			connection.query('UPDATE products SET ? Where ?', [{
				StockQuantity: res[0].StockQuantity - answer.selectQuantity
			},{
				id: answer.selectId
			}], function(err, res){});
			newOrder();
		}
	})

}, function(err, res){})
};

function newOrder(){
	inquirer.prompt([{
		type: 'confirm',
		name: 'choice',
		message: 'Would you like to place another order?'
	}]).then(function(answer){
		if(answer.choice){
			placeOrder();
		}
		else{
			connection.end();
		}
	})
};


