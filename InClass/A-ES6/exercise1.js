// Turn this function into an arrow function
function arrow() {
    return "es6 is awesome!";
}

//result:
const arrow = () => "es6 is awesome";

//Use the es6 syntax for default parameter
function defaultParameter(name) {
    var name = name || "sam";
    return name;
}

//result:

const defaultParameter = (name = "sam") => name;

// Use the spread operator to combine arr1 and arr2
function combineArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

//result:

function combineArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

//use destructuring to return the object's cyf property
function destructuring(obj) {
    return obj.cyf;
}
// result:

function destructuring(obj) {
    const { cyf } = obj;
    return cyf;
}

// use template literal to return a string with the sum of a and b
function templateString(a, b) {
    return "The sum is equal to " + (a + b).toString();
}

//result:

function templateString(a, b) {
    return `The sum is equal to ${a + b}`;
}