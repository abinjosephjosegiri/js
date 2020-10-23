// let temperature =20;
// let result = temperature <20
// console.log(result)

let temperature = 35 ;
// sum how need to find temperature form google

if (temperature < 15)
{
    console.log(`Temperature is ${temperature} its Deep Freeze`);
}
if (temperature > 15 ){
    if (temperature <30 ){
        console.log(`Temperature is ${temperature} Controlled Room Temperature`)
    }
} 
if (temperature > 30 ){
    if (temperature < 40 ){
        console.log(`Temperature is ${temperature} Warm`)
    }
}
if (temperature > 40 ){
    console.log(`Temperature is ${temperature} Excessive Heat `)
}