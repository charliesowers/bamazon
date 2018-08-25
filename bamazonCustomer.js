var inquirer = require('inquirer');

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 8889,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  
    displayProducts();
  
});

function displayProducts(){
    connection.query('select * from products', function(err,res){
        if (err) throw err;
        //console.log(res);
        for(var i = 0; i < res.length; i++){
            pack = res[i];
            list = "ID: " + pack.item_id + " | Product: " + pack.product_name +
                   " | Department: " + pack.department_name + " | Price: $" + pack.price +
                   " | Quantity: "+ pack.stock_quantity;
            console.log(list);
        }
        promptUser();
        //connection.end()
    });
}


function promptUser(){
    inquirer.prompt([

        {
          type: "input",
          name: "id",
          message: "Please type the ID of the product you want to purchase:"
        },
        {
            type: "input",
            name: "quant",
            message: "Please type how many you would like:"
        }
      
      
      ]).then(function(answer) {

        id = parseInt(answer.id);
        quant = parseInt(answer.quant);
        
        connection.query('select * from products where item_id = ? and stock_quantity >= ?' , 
                    [id, quant], function(err,res1){
            if (err) throw err;
            if(res1 === []){
                console.log('Not enough in stock!');
            }
            else{
                connection.query('UPDATE products SET stock_quantity = stock_quantity - ? WHERE item_id = ?', 
                                [quant, id], function(err,res2){
                    if (err) throw err;
                    
                    console.log("Your total is: $" + res1[0].price * quant);

                    connection.end()
                });
            }
            
        });
      });
}


