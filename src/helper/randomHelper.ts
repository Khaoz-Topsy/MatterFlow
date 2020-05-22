
// import * as seedrandom from 'seedrandom';
const seedrandom = require('seedrandom');

export const randomFromSeed = (randomSeed: string, maxNumber: number) => {
    try {
        const func = seedrandom(randomSeed);
        return func() * maxNumber;
    } catch (ex) {
        return 0;
    }
}

export const getIndex = (numPossibilities: number, rando: number, maxPossibilities: number): number => {
    let index = Math.round((rando / maxPossibilities) * numPossibilities);
    console.log('randomHelper', { index })

    let selectedIndex = 0;
    if (index <= numPossibilities) selectedIndex = index;
    return selectedIndex;
}