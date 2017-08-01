var mysql = require("mysql");
var inquirer = require("inquirer");

const chalk = require('chalk');
const log = console.log;

var Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",
    password: "",
    database: "bamazon_db"
});



connection.connect(function(err) {
    if (err) throw err;

    console.log("connected as id: " +
        connection.threadId);
    console.log("\n" + "CONNECTED TO BAMAZON DATABASE...");

    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            log("\n" + chalk.cyan.bold("\nID: ") + res[i].product_id + " ||" +
                chalk.cyan.bold(" PRODUCT NAME: ") + res[i].product_name + " ||" +
                chalk.cyan.bold(" DEPT NAME: ") + res[i].department_name + " ||" +
                chalk.cyan.bold(" PRICE: ") + res[i].price + " ||" +
                chalk.cyan.bold(" STOCK QUANTITY: ") + res[i].stock_quantity + "\n");
        }
        messageOne();
    });
});

function messageOne() {
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        inquirer.prompt([{
                name: "productId",
                type: "rawlist",
                choices: function() {
                    var choiceArrayId = [];
                    for (var i = 0; i < results.length; i++) {
                        choiceArrayId.push({ name: results[i].product_name, value: results[i].product_id });
                    }
                    return choiceArrayId;
                },
                message: "What is the ID of the product you would like to buy?"
            },
            {
                name: "howMany",
                type: "input",
                message: "How many would you like to buy?"
            },

        ]).then(function(answers) {
            var newQuantity = answers.howMany;
            connection.query("UPDATE products SET stock_quantity =? WHERE product_id = ?", [newQuantity, answers.productId],
                function(err, results) {
                    console.log(err);
                    console.log(results);
                })
        });
    });
}