var num1= Number(prompt("Enter the first number"))
var num2= Number(prompt("Enter the second number"))

var option = prompt("Select 1) num1 + num2 or select 2) num1 - num2 or select 3) num1 * num2 or select 4) num1 / num2")

if(option==1){
    var result=num1+num2
}
if(option==2){
    var result=num1-num2
}
if(option==3){
    var result=num1*num2
}
if(option==4){
    var result=num1/num2
}
if(option==4){
    var result=num1/num2
}
if(result=="Infinity")
    console.log("can not divide by 0")

console.log("the result is; " + result);