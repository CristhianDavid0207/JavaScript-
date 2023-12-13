function functionExt() {
    document.getElementById('demoTwo').innerHTML = "functionExt is stored in Script.js"
}

//SINGLE LINE JavaScript COMMENTS
//let g = 27;
//console.log(g);
/*BLOCK COMMENT JavaScript
let g = 27;
console.log(g);*/

//JavaScript Variables
// Always declare variables
//Variables are Containers for Storing Data
//JavaScript Variables can be declared in 4 ways:
//Automatically, Using var, Using let, Using const

//Automatically
//In this example, x, y, and z are undeclared. They are automatically declared when first used.
x = 5;
y = 3;
z = x + y;
console.log('This example is using Automatically -> The value of z is:', z);

//Using var
//The var keyword was used in all JavaScript code from 1995 to 2015.
//The var keyword should only be used in code written for older browsers.
//Variables declared with varinside a { } block can be accessed from outside the block. Variables defined with var can be redeclared.
var x = 7;
var y = 5;
var z = x + y;
console.log('This example is using var -> The value of z is:', z );

//Using let
//Only use let if you can't use const
//Variables declared inside a { } block cannot be accessed from outside the block. Variables defined with let can not be redeclared.
let a = 4; 
let b = 9; 
let c = a + b; 
console.log('This example is using let -> The value of z is:', b );

//Using const
//Always use const if the value should not be changed (Arrays and Objects)
const d = 2; 
const e = 4; 
const f = a + b; 
console.log('This example is using const -> The value of z is:', f );

//Mixed Example
//In this example, price1, price2, and total are variables.
const price1 = 5;
const price2 = 6;
let total = price1 + price2;

//The Assignment Operator
let v = 8;
v = v + 2;
console.log('This is example is using the assignment operator (=) -> The value of v is:', v);
//The "equal to" operator is written like == in JavaScript.

//JavaScript Data Types
//Strings are written with quotes.
//Numbers are written without quotes.
//If you put a number in quotes, it will be treated as a text string.
const pi = 3.14;
let person = "John Smith";
let answer = 'Yes I´m !';
console.log('This is a variable the type Number: ', pi);
console.log('This is a variable the type String whit double quotes: ', person);
console.log('This is a variable the type String  whit single quotes: ', answer);

//Declaring a JavaScript Variable
//In the example below, we create a variable called carName and assign the value "Volvo" to it. Then we "output" the value inside an HTML paragraph with id="demo":
let carName = 'Volvo';
function variableExample() {
    document.getElementById('demoSix').innerHTML = 
    'This is a variable <br><code> let carName = ´' + carName +  '´;</code><br>' + '<code>' + carName + '</code>' 
} 
console.log('This is a variable let inside of a function = ', carName);  

//One Statement, Many Variables
//You can declare many variables in one statement. Start the statement with let and separate the variables by comma:
let n1 = "John Doe", n2 = "Sammy", price = 200;

//A declaration can span multiple lines:
let m1 = "Michell Alvarez",
m2 = "Posada",
m3 = 200;

console.log('This is an One Statement, Many Variables ->',n1, n2, price);
console.log('This is an multiple lines, Many Variables ->',m1, m2, m3);

//Value = undefined
//A variable without a value has the value of: Undefined
let undef;
console.log('This is an variable without a Value ->', undef);

//Re-Declaring JavaScript Variables 
//Using var
//If you re-declare a JavaScript variable, it will not lose its value.
var p = 'Hola Mundo';
var p ;
console.log('This is a variable re-declare ->', p);
//You cannot re-declare a variable declared with let or const. This will not work:

//JavaScript Arithmetic
//As with algebra, you can do arithmetic with JavaScript variables, using operators like = and +
let arithmetic = 5 + 2 + 3;
console.log('This is a Example of variable arithmetic ->', arithmetic);
//You can also add strings, but strings will be concatenated:
let arithmeticStrings = 'Cristhian' + ' ' + 'David';
console.log('This is a Example of variable arithmetic with String ->', arithmeticStrings);
//If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated. Only if it is at the beginning or between them
let arithmeticStrings2 = 9 + '5' + 8 + 2;
console.log('This is other Example of variable arithmetic with String ->', arithmeticStrings2);
//If the string is at the end, the first numbers operation is executed and the concatenated string prints at the end.
let arithmeticStrings3 = 9 + 5 + 8 + ' ' + '2';
console.log('This is other Example of variable arithmetic with String ->', arithmeticStrings3);


//JavaScript Const
//Declaring a constant array does NOT make the elements unchangeable
// Create an Array
const cars = ['Saab', 'Volvo', 'BMW'];
//Change an element
cars[0] = 'Toyota';
//Add an element
cars.push('Audi')
//Display yje Array in console
console.log('Display Array ->');
console.log(cars);
//But you can NOT reassign the array:
//cars = ["Toyota", "Volvo", "Audi"];    // ERROR

//Constant Objects
//Declaring a constant object does NOT make the objects properties unchangeable:
// Create an object:
const car = {
    type: 'Fiat',
    model: '500',
    color: 'white'
};
// Change a property:
car.color = 'red';
// Add a property:
car.owner = 'Johnson';
// Display the property:
console.log('Display Array ->');
console.log(car);
console.log('Display a property in object Car -> Car model is', car.model);
//But you can NOT reassign the object:
//car = {
//    type:"Volvo", 
//    model:"EX60", 
//    color:"red"
// };                // ERROR

//Block Scope
//Declaring a variable with const is similar to let when it comes to Block Scope.
//Here constBlock is 14
const constBlock = 14;
{
    const constBlock = 35;
    console.log('Here is constBlock is ->',constBlock);
    //Here constBlock is 35
}
console.log('Here is constBlock is ->',constBlock);
//Here constBlock is 14



//JavaScript Scope
//Block Scope
{
    let ejemX = 'Variable declared with let or const';
    console.log('You can use it inside the {} block but not outside it {} ->', ejemX);    
}
// ejemX can NOT be used here
//console.log(ejemX); //Error

{
    var  ejemY = 'Variable declared with var';
    // ejemY CAN be used here
    console.log('You can use it inside the {} block ->', ejemY)
}
// ejemY CAN be used here
console.log('You can use it outside the {} block ->', ejemY);

//Local Scope
//Local variables have Function Scope: They can only be accessed from within the function.

// code here can NOT use ejemL
console.log('Does not define the variable ->', typeof ejemL); //Error
function ejemLocal() {
    let ejemL = 'Variable Local (var, let or const)'; // Function Scope (var, let or const)
    console.log('if you define the variable local inside the {} block ->', typeof ejemL, ejemL);    
    // code here CAN use ejemL
  }
ejemLocal();
// code here can NOT use ejemL
console.log('Does not define the variable ->', typeof ejemL); //Error

//Since local variables are only recognized inside their functions, variables with the same name can be used in different functions. Local variables are created when a function starts, and deleted when the function is completed.


//Global JavaScript Variables
//A variable declared outside a function, becomes GLOBAL.
let ejemG = 'Variable Global (var, let, const)'; // Global scope
console.log('I can display outside the function ->', typeof ejemG,ejemG );
// code here can use carName

function ejemGobal() {
    console.log('I can display inside the function ->',typeof ejemG, ejemG )
    // code here can also use carName
}
ejemGobal()
console.log('I can display outside the function ->',typeof ejemG, ejemG )
//A global variable has Global Scope: All scripts and functions on a web page can access it. 

//Global Variables in HTML
function windowObjet() {
    var variableHtmlVar = 'Local variables defined with the var';
    // code here can not use window.variableHtmlVar
    document.getElementById('demoSix').innerHTML = 
    'I can not display ' + variableHtmlVar;
    console.log('I can display window Objet without window. ->', variableHtmlVar);
}

function windowObjet2() {
    let variableHtmlLet = "Local variables defined with the let";
    // code here can not use window.variableHtmlLet
    document.getElementById("demoSix").innerHTML = "I can not display " + variableHtmlLet;
    console.log('I can display window Objet without window. ->', variableHtmlLet);    
}
//The lifetime of a JavaScript variable starts when it is declared. Function (local) variables are deleted when the function is completed. In a web browser, global variables are deleted when you close the browser window (or tab).


//JavaScript Operators
//Types of JavaScript Operators
//There are different types of JavaScript operators:
// * Arithmetic Operators
// * Assignment Operators
// * Comparison Operators
// * String Operators
// * Logical Operators
// * Bitwise Operators
// * Ternary Operators
// * Type Operators

//Arithmetic Operators Example
let arithmeticOne = 50, arithmeticTwo = (10 + 50) * arithmeticOne;
console.log('This is a aritmetic Operators Example ->', arithmeticTwo);
console.log('This is an Addition:', 20 + 5);
console.log('This is a Subtraction:', 20 - 5);
console.log('This is a Multiplication:', 20 * 5);
console.log('This is an Exponentiation:', 2 ** 5);
console.log('This is a Other example of Exponentiation:', Math.pow(2,5));
console.log('This is a Division:', 20 / 5);
console.log('This is a Modulus (Division Remainder):', 20 % 3);
console.log('Variable value ->', arithmeticOne);
console.log('This is a Increment:', ++ arithmeticOne);
console.log('New variable value ->', arithmeticOne);
console.log('This is a Decrement:', -- arithmeticOne);
// Other example of Incrementing and Decrementing
let incrOne = 125;
console.log('This is the Number:', incrOne);
incrOne++;
console.log('This is an other Increment ->', incrOne);
let decrOne = 125;
console.log('This is the Number:', decrOne);
decrOne--;
console.log('This is an other Decrement ->', decrOne);




//JavaScript Assignment Operators
let assignmentOne = 28;
assignmentOne += 12;
assignmentOne -= 5;
assignmentOne *= 2;
assignmentOne /= 2;
assignmentOne %= 5;
assignmentOne **= 0;
console.log('This is a Example assignment and additions of Assignment Operators ->', assignmentOne);


//JavaScript Comparison Operators
const compOne = 250, compTwo = 100, compThree = "250", compFour = 17;
resultComparison1 = compOne == compThree; // equal to
resultComparison2 = compOne === compThree; // equal value and equal type
resultComparison3 = compOne != compThree; // not equal
resultComparison4 = compOne !== compThree; // not equal value or not equal type
resultComparison5 = compOne > compTwo; // greater than
resultComparison6 = compOne < compTwo; // less than
resultComparison7 = compTwo >= compThree; // greater than or equal to
resultComparison8 = compOne <= compThree; // less than or equal to
//condición ? expresiónSiVerdadero : expresiónSiFalso;
const edad = (compFour >= 18) ? 'It is an Adult' : 'You are a Minor' // ternary operator

console.log('This is a Example of  JavaScript Comparison Operators ->');
console.log('This is a Comparison:', resultComparison1, '´equal to´');
console.log('This is a Comparison:', resultComparison2, '´equal value and equal type´');
console.log('This is a Comparison:', resultComparison3, '´not equal´');
console.log('This is a Comparison:', resultComparison4, '´not equal value or not equal type´');
console.log('This is a Comparison:', resultComparison5, '´greater than´');
console.log('This is a Comparison:', resultComparison6, '´less than´');
console.log('This is a Comparison:', resultComparison7, '´greater than or equal to´');
console.log('This is a Comparison:', resultComparison8, '´less than or equal to´');
console.log('This is a Comparison:', edad, '´ternary operator´');

//JavaScript String Comparison
//All conditional operators can be used on both numbers and strings.
let animal = 'Lila';
let animalSpecies = (animal === 'lila') ? 'Lila is a Cat' : 'This is a Different Species';
console.log(animalSpecies);
let compStringOne = 'A', compStringTwo =  'B';
let resultCompString = compStringOne > compStringTwo;
console.log('This is a Example of String Comparison', resultCompString);


//JavaScript String Addition
//The + can also be used to add (concatenate) strings:
let concatOne = 'Cristhian', concatTwo = 'David ';
let resulConcat = concatOne + ' ' + concatTwo;
console.log('This is a string concatenated with a (+) sign ->', resulConcat);
resulConcat += 'Bermudez'
console.log('This is a string concatenated and add with a (+=) sign ->', resulConcat);
//When used on strings, the + operator is called the concatenation operator.

//Adding Strings and Numbers
//Adding a number and a string, returns a string.
let addingStringOne = 5 + 5 + '2';
let addingStringTwo = '5' + 25;
let addingStringThree = 'Hello Number ' + 6
console.log('This is an Example of adding String and Number ->', addingStringOne, typeof addingStringOne);
console.log('This is an Example of adding String and Number ->', addingStringTwo, typeof addingStringTwo);
console.log('This is an Example of adding String and Number ->', addingStringThree, typeof addingStringThree);
//If you add a number and a string, the result will be a string!


//JavaScript Logical Operators
// Operator	Description
// &&	logical and
// ||	logical or
// !	logical not

// JavaScript Type Operators
//typeof	Returns the type of a variable
//instanceof	Returns true if an object is an instance of an object type
const typeofExample = 5.3;
console.log('This is an Example of type of variable -> ', typeof typeofExample);

//JavaScript Data Types
//JavaScript has 8 Datatypes
// 1. String
// 2. Number
// 3. Bigint
// 4. Boolean
// 5. Undefined
// 6. Null
// 7. Symbol
// 8. Object

// The Object Datatype
// The object data type can contain:

// 1. An object
// 2. An array
// 3. A date

//EXAMPLES
// Number:
let lengthNumber = 16; weightNumber = 7.5;
console.log('This is an example of Data types Number: length',lengthNumber,'type', typeof lengthNumber);
console.log('This is an example of Data types Number: wight',weightNumber, 'type', typeof weightNumber);

// Strings:
let colorString = 'Yellow'; LastNameString = 'Michell';
console.log('This is an example of Data types String: Color',colorString,'type', typeof colorString);
console.log('This is an example of Data types String: Last Name',LastNameString, 'type', typeof LastNameString);

// Booleans
let xBooleans = true, yBooleans= false;
console.log('This is an example of Data types Booleans: X',xBooleans,'type', typeof xBooleans);
console.log('This is an example of Data types Booleans: Y',yBooleans, 'type', typeof yBooleans);

// Object:
const personObject = {
    firstNameObject: 'Jacquelina',
    LastNameObject: 'Monsalve',
}
console.log('This an example of Data types Object: PersonObject');
console.log(personObject);


// Array object:
const carsArrayObject = ['Saab0', 'Volvo', 'BMW'];
console.log('This is an example of Data types: Array Object')
console.log(carsArrayObject, typeof carsArrayObject);
 
// Date object:
const dateObject = new Date('2022-03-25');
console.log('This is an example of Data types: Date Object');
console.log(dateObject, typeof dateObject);
const dateObjectTwo = new Date();
console.log('This is a other example of Data types: Date() Object');
console.log(dateObjectTwo, typeof dateObjectTwo);

const yearObject = dateObjectTwo.getFullYear();
const monthObject = dateObjectTwo.getMonth() + 1;
const dayObject = dateObjectTwo.getDate();
console.log('Year:', yearObject , 'Month:', monthObject , 'Day:', dayObject);

//A JavaScript variable can hold any type of data.
//When adding a number and a string, JavaScript will treat the number as a string.
let dataTypeExample = 'Volvo ' + 16;
console.log('this is an example of why the variables should be typed: ');
let dataTypeExampleTwo = 16 + 4 + ' Volvo';
////JavaScript evaluates expressions from left to right. Different sequences can produce different results:

console.log('This is a String: ',  dataTypeExampleTwo,typeof dataTypeExampleTwo);
//In the first example, JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".

let dataTypeExampleThree = 'Volvo' + 16 + 4;
console.log('This is a String: ', dataTypeExampleThree ,typeof dataTypeExampleThree);
//In the second example, since the first operand is a string, all operands are treated as strings.

//JavaScript Types are Dynamic
let variableDynamic; // Now variableDynamic is undefined
console.log('This is an example of Types Dynamic: variableDynamic', variableDynamic, typeof variableDynamic );
variableDynamic = 5;       // Now variableDynamic is a Number
console.log('This is an example of Types Dynamic: variableDynamic', variableDynamic, typeof variableDynamic );
variableDynamic = "John";  // Now variableDynamic is a String
console.log('This is an example of Types Dynamic: variableDynamic', variableDynamic, typeof variableDynamic );


































//JavaScript Assignment
//The Assignment Operator (=) assigns a value to a variable:
// function assignmentOne() {
//     let assignment1 = 15;
//     document.getElementById('demoSeven').innerHTML =
//     'This is an Assignment Operator <br><code>' + assignment1 + '</code>'
//     console.log('This is an Assignment Operator ->', assignment1);    
// }


