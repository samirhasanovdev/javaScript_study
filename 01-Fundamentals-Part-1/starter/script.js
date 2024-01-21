// // // const country = 'Azerbaijan';
// // // const continent = 'Europe';
// // // let population = 10000000;
// // // const isIsland = false;
// // // const language = 'Azeri'; 
// // // console.log (country, continent, population, isIsland, language)


// // // const massMark = 78;
// // // const heightMark =1.69;
// // // const massJohn = 92;
// // // const heightJohn = 1.95;

// // // const BMIMark = massMark / (heightMark * heightMark);
// // // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // // const markHigherBMI = (BMIMark > BMIJohn);
// // // console.log (BMIJohn, BMIMark, markHigherBMI);

// // // const firstName = 'Samir';
// // // const birthYear = 1994;
// // // const job = 'ArmyMan';
// // // const year = 2024;

// // // const samirNew = `I'm ${firstName}, a ${year-birthYear} ${job}`
// // // console.log ('')


// // const age = 25;

// // if (age >=18) {
// //     console.log ('Samir can drive')
// // }
// // else {
// //     const yearsLeft = 18 - age;
// //     console.log (`You should wait for another ${yearsLeft} years`)
// //      }
    

// // const birthYear = 2024;
// // let century;
// // if (birthYear >= 2000) {
// //     century = 21;
// // }
// // else {
// //     century = 20;
// // }

// // console.log (century)
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// const BMIMark = massMark / (heightMark * heightMark);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//     console.log (`Mark's BMI ${BMIMark} is higher than John's! ${BMIJohn}`)
// }
// else {
//     console.log (`John's BMI ${BMIJohn} is higher than Mark's ${BMIMark} !`)
// }


// const favourite = prompt ('Your number');

// if (favourite == 23) { // with if (favourite === 23) it will not work
//     console.log ('Cool number')
// }

// const hasgoodvison = true;
// const hasdriverlicense = false;
// console.log (hasdriverlicense   && hasdriverlicense)
// console.log (hasdriverlicense || hasgoodvison)
// console.log (!hasdriverlicense)


const scoreDolphins  = (96+108+89)/3;
const scoreKoalas = (88+91+110)/3;

if (scoreDolphins > scoreKoalas) {
    console.log ('Dolphins win the trophy');
} else if  (scoreKoalas > scoreDolphins) {
    console.log ('Koalas win the trophy');
}
else
 {
    console.log ('Both win the trophy')
}

// if (scoreDolphins > scoreKoalas) {
//     console.log('Dolphins win the trophy');
// } else if (scoreKoalas > scoreDolphins) {
//     console.log('Koalas win the trophy');
// } else {
//     console.log('Both win the trophy');
// }