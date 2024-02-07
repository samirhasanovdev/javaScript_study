'use script'


const cutPieces = function (fruit) {
    return fruit * 4;
}

const juiceMaker = function (apples, oranges) {
    const applesPieces = cutPieces (apples);
    const orangePieces = cutPieces (oranges);

    const juice = `I have ${applesPieces} and ${orangePieces}`;
    return juice;
}

console.log (juiceMaker(10, 20))