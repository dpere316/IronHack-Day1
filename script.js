// Strings are characters in "Quotes"
let a = 'Hello world'
console.log(a);

// Arrays are a collection of values
let c = ['Juancito', 5 , ' cats' , a];
console.log(c, 'Type of c is ' + typeof c);

console.log(c[0]) // Array is zero indexed

let d = { // key value pairs
    name: 'Andrew'
}

console.log(d.name) // Dot notation
console.log(d['name']) // Bracket notation

// These are all function with different ways to create them.
let e = function() 
{
    console.log('does something')
}
e(); // function call

function f()
{
    console.log('f')
}

f(); // function call

let g = (name) => {

    return 'Hello ' + name
}
console.log(
    g('Daniel')
)
 // function call 


// Booleans are used for conditional expressions

console.log("does five equal five?", '5' == 5) // checks values
console.log("does five equal five?", '5'=== 5) // checkss type of data EX: string and int

if('dog' == 'dog')
{
    console.log("RUFF!!")
}

// Loops "For", "While", "Do-While"

for(let i = 0; i < 5; i++)
{
    console.log(g('Daniel ' + i));
}

// undefined && null

let car = {
    seats:4,
    color: 'red',
    style: 'convertible'
}

console.log(car.color)

let u = undefined
console.log(u, typeof u)

let v = null
console.log(v, typeof v)

if(true){
    console.log('does this fire')
}
// Add new properties to an already created object
let obj = {
    prop1: 'Value',
    prop2: 12
}

console.log(obj)

obj.prop3 = {
    obj2prop1: 'Value2'
}

console.log(obj)

obj.name = "DP"

console.log(obj)

console.log(obj.prop3.obj2prop1)

// Arrays
let arr = ['Value1', 'Value2', 'Value3']
console.log('This is index zero ' + arr[0]) // index zero

// Add value 4
arr.push('Value5') // adds element to the end of the array
console.log(arr)

arr.unshift('Value4') // adds element to the front of the array
console.log(arr)





