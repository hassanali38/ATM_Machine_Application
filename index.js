#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.hex('#4CAF50')("\t\t\t\t╔═══════════════════════════════════════════╗"));
console.log(chalk.bold.hex('#4CAF50')("\t\t\t\t║                                           ║"));
console.log(chalk.bold.hex('#4CAF50')("\t\t\t\t║          Welcome to ATM Services          ║"));
console.log(chalk.bold.hex('#4CAF50')("\t\t\t\t║                                           ║"));
console.log(chalk.bold.hex('#4CAF50')("\t\t\t\t╚═══════════════════════════════════════════╝\n"));
let userPin = 55663;
let accountBalance = 100000;
let enterPin = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter the pin of your account : ",
    },
]);
if (enterPin.pin == userPin) {
    console.log(chalk.bgGreen.black("Login Successful!"));
    while (true) {
        console.log();
        let chooseOperation = await inquirer.prompt([
            {
                type: "list",
                name: "operation",
                message: "Choose an operation : ",
                choices: ["Withdraw", "Deposit", "Balance Inquiry", "Exit"],
            },
        ]);
        switch (chooseOperation.operation) {
            case "Balance Inquiry":
                console.log("Your current balance is : " + chalk.yellow("Rs " + accountBalance));
                break;
            case "Withdraw":
                let amountWithdraw = await inquirer.prompt([
                    {
                        type: "number",
                        name: "amount",
                        message: "Enter the amount to withdraw : ",
                    },
                ]);
                if (amountWithdraw.amount > accountBalance) {
                    console.log(chalk.bgRed("Insufficient Balance!"));
                }
                else {
                    accountBalance -= amountWithdraw.amount;
                    console.log(chalk.bgGreen.black("Withdraw Successful!"));
                    console.log("Your current balance is : " + chalk.yellow("Rs " + accountBalance));
                }
                break;
            case "Deposit":
                let amountDeposit = await inquirer.prompt([
                    {
                        type: "number",
                        name: "amount",
                        message: "Enter the amount to deposit : ",
                    },
                ]);
                accountBalance += amountDeposit.amount;
                console.log(chalk.bgGreen.black("Deposit Successful!"));
                console.log("Your current balance is : " + chalk.yellow("Rs " + accountBalance));
                break;
        }
        if (chooseOperation.operation == "Exit") {
            console.log(chalk.bgGreen.black("Thank You For Using Our Services!"));
            break;
        }
        let againOperation = await inquirer.prompt([
            {
                type: "list",
                name: "again",
                message: "Do you want to perform another operation? : ",
                choices: ["Yes", "No"],
            },
        ]);
        if (againOperation.again == "No") {
            console.log(chalk.bgGreen.black("Thank You For Using Our Services!"));
            break;
        }
    }
}
else {
    console.log(chalk.bgRed.black("Invalid Pin!"));
}
