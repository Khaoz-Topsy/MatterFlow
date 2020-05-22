const guidSectionLength = 3;

export const maxPossibilities = 1000;

export const getGuidSection = (guid: string, sectionNum: number) => {
    return guid.substring(sectionNum, ((sectionNum * guidSectionLength) + guidSectionLength));
}