import React from 'react';

import { getGuidSection, maxPossibilities } from '../../helper/guidHelper';
import { randomFromSeed, getIndex } from '../../helper/randomHelper';

import { GuidSection } from '../../constants/guidSection';


interface IProps {
    guid: string;
}

export const Main1 = (props: IProps) => {
    const randomSeed = getGuidSection(props.guid, GuidSection.MainImage);
    const rando: number = randomFromSeed(randomSeed, maxPossibilities);

    console.log('Main1', { rando });
    const numImages = 3;
    const imageIndex = getIndex(numImages, rando, maxPossibilities);
    return (
        <section id="main" style={{ backgroundImage: `url(/assets/img/screen${imageIndex}.jpg)` }}>
            <div className="mainGrid">
                <div className="item1">
                    <p>Procedurally generated Space Stations</p>
                    <p>Procedurally generated Space Ships</p>
                    <p>Procedurally generated Weapons</p>
                    <p>Procedurally generated Chairs!</p>
                    <p>Procedurally generated Space Stations</p>
                </div>
                <div className="item2"></div>
                <div className="item3"></div>
            </div>
        </section>
    );
}
