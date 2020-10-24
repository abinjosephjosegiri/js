// in scopeChain.png figer 3 colers blue,orange,perple
/*
In the figure,As you can see it consists of 3 circles
Assume the inner circle is a  kid (name :Albin)
The middle circle is a teenager (name :Bibin)
And the outer circle is an adult (name :Abin)
If the kid gets the ice cream, he can eat that and if the teenager and adult gets ice cream the kid can ask them to give him
If teenager gets he can eat, or give to kid or ask the adult
If adult gets ice cream he can eat or give to the younger ones
But he can't ask anyone to give him
*/

let name = "Abin Joseph" //its like adult

console.log("In line number 15 :",name); //its like adult


function teenager(){
    name = "Bibin "; //teenager gets the ice cream
    console.log("In line number 20 :",name); 
}
teenager();

function Albin(){
    name = "Albin"; //kid gets the ice cream
    console.log("In line number 26 :",name); 
}
Albin();
//uncomment all lline accoding scope chain
// in this perticular code all have ther on ice cream