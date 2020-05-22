const guidSectionLength = 3;

export const maxPossibilities = 1000;

export const getGuidSection = (guid: string, sectionNum: number) => {
    const startingPoint = (sectionNum * guidSectionLength) + sectionNum;
    console.log(guid.substring(startingPoint, (startingPoint + guidSectionLength)));
    return guid.substring(startingPoint, (startingPoint + guidSectionLength));
}

export const randomGuid = () => {
    const randomInt = Math.random() * 999;
    const tempGuidString = Math.floor(randomInt).toString();
    const numToPad = guidSectionLength - tempGuidString.length;
    let result = '';
    for (let padIndex = 0; padIndex < numToPad; padIndex++) {
        result += '0';
    }
    result += tempGuidString;
    return result;
}
