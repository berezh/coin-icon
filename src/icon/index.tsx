import React, { HTMLAttributes, useMemo } from 'react';

import { useCoinIconFolderPath } from 'src/provider';
import { CoinIconCode, CoinIconCodeList } from '../interfaces';

interface Props extends HTMLAttributes<HTMLDivElement> {
    code: CoinIconCode;
}

export const CoinIcon: React.FC<Props> = ({ code, style, ...props }) => {
    const folderPath = useCoinIconFolderPath();

    const exists = useMemo(()=>{
        return CoinIconCodeList.find(x=>x === (code||'').toLowerCase());
    }, [code]);

    const imagePath = useMemo(() => {
        const path = (folderPath || '').replace(/\/+$/, '');
        return `${path}/${code}.svg`;
    }, [folderPath, code]);

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

    return exists? <div {...svgAttrs} />:null;
};
