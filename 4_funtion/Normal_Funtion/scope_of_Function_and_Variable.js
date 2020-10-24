// function  are globally available tht meens we can use funtion befor defining it
// but function is an verable then we get an error


console.log("befor")
sayHello("Abin");// befor defining use is valide

function sayHello(name){
    console.log(`My Name is ${name}`);
}

console.log("aftter")
sayHello("Abin");//this is also valid


// Let see how it works with funtion defining to a veriable function


console.log("funtion As A verable\v\n") //  "\n" : is  enter "\v" is verticl tab

// Hello("Abin") //rhis use will throw an error
// uncomment the function Hello("Abin") 
// you get an error like this :ReferenceError: Cannot access 'Hello' before initialization
const Hello = function(name){
    console.log(`My Name is ${name}`);
}
console.log("aftter")
Hello("Abin");//this is also valid

// hear we are using Hello as an verable function thiar the global condext not available
// but sayHello is a function ther for the globel condext is avaliabale