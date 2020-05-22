import React from 'react';

import { randomFromSeed, getIndex } from '../../helper/randomHelper';
import { maxPossibilities, getGuidSection } from '../../helper/guidHelper';


interface IProps {
    guid: string;
}

export const Main = (props: IProps) => {
    const randomSeed = getGuidSection(props.guid, 1);
    const rando: number = randomFromSeed(randomSeed, maxPossibilities);

    console.log('Main', { rando })
    return <h1>Main</h1>;
}
