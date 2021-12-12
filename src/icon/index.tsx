import React, { HTMLAttributes, useMemo } from 'react';
import { CoinIconCode, CoinIconCodeList } from 'src/interfaces';

import { useCoinIconFolderPath } from 'src/provider';

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
        const style: React.CSSProperties = {
            display: 'inline-block',
            height: '1em',
            width: '1em',
            backgroundImage: `url(${imagePath})`,
            backgroundPosition :'center',
            backgroundSize : 'contain',
            backgroundRepeat: 'no-repeat',
        };
        
        
        return {
            style,
            ...props,
        };
    }, [style, imagePath, props]);

    return exists? <div {...svgAttrs} />:null;
};
