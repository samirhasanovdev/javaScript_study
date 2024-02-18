'use script'


const calcAverage = (a, b, c)  => (a + b + c) / 3;


const checkWinner = function (avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas)
    return `Dolphins win (${avgDolhins} vs ${avgKoalas})`;
    else if (avgKoalas >= 2 * avgDolhins)
    return `Koalas win (${avgKoalas} vs ${avgDolhins})`
    else return 'No team wins...'
};
    
    const scoreDolphins = calcAverage (44, 23, 71);
    const scoreKoalas = calcAverage(65, 54, 49);
    const scoreDolphins2 = calcAverage (85, 54, 41);
    const scoreKoalas2 = calcAverage(23, 34, 27);
    
console.log (checkWinner (scoreDolphins, scoreKoalas));
console.log (checkWinner (scoreDolphins2, scoreKoalas2));
sdsds