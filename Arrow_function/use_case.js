const number = [{
    title: 'one',
    value: 1
},{
    title: 'two',
    value: 2
},{
    title: 'three',
    value: 3
},{
    title: 'four',
    value: 4
},{
    title: 'five',
    value: 5
},{
    title: 'six',
    value: 6
},{
    title: 'seven',
    value: 7
},{
    title: 'eight',
    value: 8
},{
    title: 'nine',
    value: 9
},{
    title: 'zero',
    value: 0
}
];

/*
Not Using Arrows function 
INPUT   :   Array with number
Out     :   Array with only Even Fumbers
*/
const notArrows =  number.filter(function (number){
     return number.value%2 === 2;
})
console.log(notArrows);
/*
Not Using Arrows function 
INPUT   :   Array with number
Out     :   Array with only odd Fumbers
*/
const Arrows =  number.filter((number) =>number.value%2 === 0)
console.log(Arrows)
