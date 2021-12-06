import React, { SVGAttributes, useMemo } from 'react';

import { CoinIconNameList } from '..';
import { CoinIconName } from '../names';

const icons: Record<string, React.FC> = {};

for (const name of CoinIconNameList) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const icon = require(`../../svg/${name}.svg`);
    icons[name] = icon;
}

interface Props extends SVGAttributes<any> {
    name: CoinIconName;
}

export const CoinIcon: React.FC<Props> = ({ name, style, ...props }) => {
    const svgAttrs: Partial<SVGAttributes<any>> = useMemo(() => {
        return {
            fill: 'currentColor',
            style: { display: 'inline-block', height: '1em', ...style },
            ...props,
        };
    }, [style, props]);

    const Icon = icons[name];
    return Icon ? <Icon {...svgAttrs} /> : null;
};
