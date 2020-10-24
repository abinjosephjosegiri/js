
//Normal function
const hello = function(nama){
    return ("Hello " + nama + " How are you?");
}
let x=hello("Abin");
console.log(x);
//Arrow function
const Arrow_Hello = (name) => {
    return ("Hello " + name + " How are you?");
}

let y=Arrow_Hello("Albin");
console.log(y);

const Arrow_Hello_sum = (name) => `Hello  ${name}  How are you?"`

let z=Arrow_Hello_sum("Bibin");
console.log(z);