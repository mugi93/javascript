// 01 - Hello World
 console.log("Hello World")

// 02 - String

var test = "My name is Mugilan";
console.log(test)

// 03 Concatenation 
var name = "Mugilan";
console.log("Nice to meet you " + name);

//04 String Length

var testLength = "I'm very long !";
console.log(testLength.length);

//05 - Replace
var food = "croissant is meh";
food = food.replace("meh"," so good");
console.log(food)

//06 - Up and Down
var basic ="This is Cool";
var basicUp = basic.toLocaleUpperCase();
var basicDown = basic.toLocaleLowerCase();
console.log(basic , basicUp ,basicDown);


//07 - Split
var world = "banana";
var letters = world.split("");
console.log(letters);

//08 - Template
var age = 26;
var template=`I'm ${age} years old`;
console.log(template);

//bonus
var changed="bonjour";

console.log(changed.replace(/o/g,"a"));





