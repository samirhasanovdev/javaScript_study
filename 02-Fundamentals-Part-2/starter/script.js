'use script'


// const calcAverage = (a, b, c)  => (a + b + c) / 3;


// const checkWinner = function (avgDolhins, avgKoalas) {
//     if (avgDolhins >= 2 * avgKoalas)
//     return `Dolphins win (${avgDolhins} vs ${avgKoalas})`;
//     else if (avgKoalas >= 2 * avgDolhins)
//     return `Koalas win (${avgKoalas} vs ${avgDolhins})`
//     else return 'No team wins...'
// };
    
//     const scoreDolphins = calcAverage (44, 23, 71);
//     const scoreKoalas = calcAverage(65, 54, 49);
//     const scoreDolphins2 = calcAverage (85, 54, 41);
//     const scoreKoalas2 = calcAverage(23, 34, 27);
    
// console.log (checkWinner (scoreDolphins, scoreKoalas));
// console.log (checkWinner (scoreDolphins2, scoreKoalas2));

// const calcTip = function (bill) {
// return bill >= 50 && bill <= 300 ? bill * 0.15 : bill *0.2
// }
// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]];

// const samir =  {
//     firstName: 'Samir',
//     lastName: 'Hasanov',
//     birthYear: 1994,
//     job: 'dev',
//     friends: ['Peter', 'Steven', 'Lara'],
//     hasDriverlicense: true,
//     // calcAge: function () {
//     //     return 2024 - this.birthYear;   
//     calcAge: function () {
//         this.age = 2024 - this.birthYear;
//         return this.age;
//      },
//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverlicense ? 'a' : 'no'} driver's license.`
//       }
// };


// // console.log (samir['firsstName'], 'has' , samir['friends'].length, 'friends, and his best friend is called', samir['friends'][0])
// console.log (samir.calcAge())
// console.log (samir.getSummary())

// // if (samir.hasDriverlicense) {
// //     console.log (`${samir.firsstName} is a ${samir.age} years old dev and has a driver license `)
// // } 
// // else {
// //     console.log ('Nothing')
// // }



const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height * this.height))
        return this.bmi
    },
     
}
const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = (this.mass / (this.height * this.height))
        return this.bmi
    },
}


mark.calcBMI()
john.calcBMI()


if (mark.bmi > john.bmi) {
    console.log (`Mark's ${mark.calcBMI()} is higher than John's ${john.calcBMI( )}`)
}
else {
    console.log (`John's ${john.calcBMI} is higher than mark's ${mark.calcBMI}`)
}