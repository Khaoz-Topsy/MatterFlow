import React from 'react';

import { randomFromSeed } from '../../helper/randomHelper';
import { maxPossibilities, getGuidSection } from '../../helper/guidHelper';

import { Logo1 } from './logo1';

interface IProps {
    guid: string;
}

export const Logo = (props: IProps) => {
    const randomSeed = getGuidSection(props.guid, 0);
    const rando: number = randomFromSeed(randomSeed);

    const possibilities = [
        <Logo1 />
    ];

    let index = Math.round(maxPossibilities / rando);
    if (index / maxPossibilities) return possibilities[0];
    return possibilities[index];
}
