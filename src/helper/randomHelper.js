export const randomFromSeed = (randomSeed) => {
    try {
        return Math.seedrandom(randomSeed);
    } catch (ex) {
        return 0;
    }
}