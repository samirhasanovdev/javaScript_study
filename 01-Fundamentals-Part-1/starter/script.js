// const country = 'Azerbaijan';
// const continent = 'Europe';
// let population = 10000000;
// const isIsland = false;
// const language = 'Azeri'; 
// console.log (country, continent, population, isIsland, language)


const massMark = 78;
const heightMark =1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = (BMIMark > BMIJohn);
console.log (BMIJohn, BMIMark, markHigherBMI);