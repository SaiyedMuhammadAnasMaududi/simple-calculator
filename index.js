#!/usr/bin/env node
import inquirer from 'inquirer';
const answer = await inquirer.prompt([{ message: "ENTER FIRST NUMBER", type: "number", name: "firstnumber" }, { message: "Enter  second number", type: "number", name: "secondnumber" }, { message: "select the operator to perform action", type: "list", name: "operator", choices: ["Addition", "Subtraction", "Division", "Multiplication",] }]);
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else {
    console.log(answer.firstnumber / answer.secondnuber);
}
;
