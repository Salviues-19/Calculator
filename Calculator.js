let num1 = Number(prompt("Enter the first number"))
let num2 = Number(prompt("Enter the second number"))
let operator = prompt("Enter the operator")


function Calculator(a,b,operator){
if(operator === "+"){
    return a+b;
}else if(operator === "-"){
    return a-b;
}else if(operator === "*"){
    if(a===0 || b===0){
        alert("Anything multiply with zero is zero")
    }
    return a*b;
}else if(operator === "/"){
     if(a===0 || b===0){
        alert("Anything divided by zero is zero")
    }
    return a/b;
}else{
    return "invalid operator"
}
}
let result = Calculator(num1,num2,operator)
(alert("The result of "+ num1+" "+operator+num2+" ="+result))