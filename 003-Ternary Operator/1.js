var age = 7;
//Normal if else condition
if(age >= 18) {
    console.log('Adult')
} else {
    console.log('Child')
}
//Ternary Operation
var type = age >= 18 ? 'Adult' : 'Child';
//Nested Ternary Operator
var age = 10;
var type = age >= 18 ? 'Adult' : age < 9 ? 'Child': 'Young';
console.log(type)