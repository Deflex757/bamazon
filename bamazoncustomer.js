var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Alien25ufo@",
    database: "bamazon"
});


connection.connect(function (err) {
    if (err) throw err;
    displaysql();
    runSearch();
});

function runSearch() {
    inquirer
        .prompt([{
            name: "action",
            type: "rawlist",
            message: "What is the id of the item you wish to purchase?",
            choices: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10"
            ]
        },
        {
            name:"whatever",
            type: "rawlist",
            message: "How many would you like to purchase?",
            choices: [
                "1",
                "2",
                "3",
                "4",
                "5",
                "5+"
            ]

        }
        ]
        ).then(function(answer){
            switch(answer.whatever){
                case "1": var total = 5 * 1;
                console.log("you total is "+ total+ " dollars!")
                break;

                case "2": var total = 5 * 2;
                console.log("you total is "+ total+ " dollars!")
                break;

                case "3": var total = 5 * 3;
                console.log("you total is "+ total+ " dollars!")
                break;

                case "4": var total = 5 * 4;
                console.log("you total is "+ total+ " dollars!")
                break;

                case "5+": var total = null;
                console.log("Insufficient quantity!")
                break;
            }
        });
        
      
    
    
};

function displaysql() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
   
      // Log all results of the SELECT statement
      console.log(res);
    //   connection.end();
    })};
