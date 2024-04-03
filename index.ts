#! /usr/bin/env node 

 import inquirer from "inquirer";

 //printing a welcome massage
 console.log("\n\tWelcome to \'muniza_tooba\' - CLI Simple Calculator\n");

//Asking Questions from user through inquire


 let answers = await inquirer.prompt([
    {message :"Enter first number" , type : "number", name: "firstNumber"},
    {message :"Enter second number" , type : "number", name: "secondNumber"},
    {
        massage :"Select one operator to perfrom operations",
        type : "list",
        name : "operator",
        choices: ["Addition", "Subtractions","Multiplication", "Division"],
    },
 ]);
 //Conditional statment if else
if(answers.operator === "Addition"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if(answers.operator === "Subtractions"){
    console.log(answers.firstNumber - answers.secondNumber)
}
 else if(answers.operator === "Multiplication"){
    console.log(answers.firstNumber * answers.secondNumber)
}
 else if(answers.operator === "Division"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else{
    console.log("Invalid Input");
}