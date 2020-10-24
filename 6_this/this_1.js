const x = this ;

console.log(x);
//out put {} //in javascript node engin you get only an empty list but in an browser you get entaly deffrent consept
console.log("This is an",typeof(x));
//This is an object

let game = "football";
function sayName(){
    let name = "Abin Joseph";
    console.log(this);
}
sayName();

//we will discoss this object affter sum time