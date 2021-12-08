import React, { ImgHTMLAttributes, useMemo } from 'react';

import { useCoinIconFolderPath } from 'src/provider';
import { CoinIconName } from '../interfaces';

interface Props extends Omit<ImgHTMLAttributes<any>, 'src'> {
    name: CoinIconName;
}

export const CoinIcon: React.FC<Props> = ({ name, style, ...props }) => {
    const folderPath = useCoinIconFolderPath();

    const src = useMemo(() => {
        const path = (folderPath || '').replace(/\/+$/, '');
        return `${path}/${name}.svg`;
    }, [folderPath, name]);

    const svgAttrs: Partial<ImgHTMLAttributes<any>> = useMemo(() => {
        return {
            style: { display: 'inline-block', height: '1em', ...style },
            src,
            ...props,
        };
    }, [style, src, props]);

    return <img {...svgAttrs} />;
};
