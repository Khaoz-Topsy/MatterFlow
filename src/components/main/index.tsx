import React from 'react';

import { randomFromSeed, getIndex } from '../../helper/randomHelper';
import { maxPossibilities, getGuidSection } from '../../helper/guidHelper';

import { GuidSection } from '../../constants/guidSection';

import { Main1 } from './main1';
import { Main2 } from './main2';

interface IProps {
    guid: string;
}

export const Main = (props: IProps) => {
    const randomSeed = getGuidSection(props.guid, GuidSection.Main);
    const rando: number = randomFromSeed(randomSeed, maxPossibilities);

    console.log('Main', { rando });
    const numPossibilities = 2;
    const selectedIndex = getIndex(numPossibilities, rando, maxPossibilities);

    switch (selectedIndex) {
        case 0:
        default:
            return <Main1 {...props} />;
        case 1:
            return <Main2 {...props} />;
    }
}
