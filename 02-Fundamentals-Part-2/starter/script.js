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

const calcTip = function (bill) {
    if (bill >= 50 && bill <= 300) {
        return (bill * 100) / 15
    }
    else {
        return (bill * 100) / 20
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [bills[0] + tips[0],bills[1] + tips[1], bills[2] + tips[2]];
