import React, { HTMLAttributes, useMemo } from 'react';

import { useCoinIconFolderPath } from 'src/provider';
import { CoinIconName } from '../interfaces';

interface Props extends HTMLAttributes<HTMLDivElement> {
    name: CoinIconName;
}

export const CoinIcon: React.FC<Props> = ({ name, style, ...props }) => {
    const folderPath = useCoinIconFolderPath();

    const imagePath = useMemo(() => {
        const path = (folderPath || '').replace(/\/+$/, '');
        return `${path}/${name}.svg`;
    }, [folderPath, name]);

    const svgAttrs: Partial<HTMLAttributes<HTMLDivElement>> = useMemo(() => {
        const mask = `url(${imagePath}) no-repeat center`;
        return {
            style: {
                backgroundColor: 'var(--coinIconColor)',
                display: 'inline-block',
                height: '1em',
                width: '1em',
                mask,
                WebkitMask: mask,
                ...style,
            },
            ...props,
        };
    }, [style, imagePath, props]);

    return <div {...svgAttrs} />;
};
