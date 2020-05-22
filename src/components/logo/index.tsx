import React from 'react';

import { randomFromSeed, getIndex } from '../../helper/randomHelper';
import { maxPossibilities, getGuidSection } from '../../helper/guidHelper';

import { Logo1 } from './logo1';

interface IProps {
    guid: string;
}

export const Logo = (props: IProps) => {
    const randomSeed = getGuidSection(props.guid, 0);
    const rando: number = randomFromSeed(randomSeed, maxPossibilities);

    console.log('Logo', { rando })
    return getLogoComponent(rando);
}

const getLogoComponent = (rando: number) => {
    const numPossibilities = 1;
    const selectedIndex = getIndex(numPossibilities, rando, maxPossibilities);

    switch (selectedIndex) {
        case 0:
        default:
            return <Logo1 />;
        // case 1:
        //     return <h1 />;
    }
}
