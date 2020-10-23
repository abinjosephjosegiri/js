let number  = 10;
let string ="10" ;

console.log(`Number is ${number} and Type is ${typeof number}`)
console.log(`Sum of number and string is :${number + string}`)

console.log(`string is ${string} and Type is ${typeof number}`)
console.log(`Sum of number and string is :${number + string}`)

//use Case


if (number == string ){
    console.log("\nNumber is Eqvalent to string in ==")
}

if (number === string ){
    console.log("Number is Eqvalent to string in ===")
}
else
{
    console.log("Number is not eqvalent to string in ===")
}