import React, { HTMLAttributes, useMemo } from 'react';

import { useCoinIconFolderPath } from 'src/provider';
import { CoinIconCode, CoinIconCodeList, CoinItonType } from '../interfaces';

interface Props extends HTMLAttributes<HTMLDivElement> {
    code: CoinIconCode;
    type?: CoinItonType;
}

export const CoinIcon: React.FC<Props> = ({ code, type = 'default', style, ...props }) => {
    const folderPath = useCoinIconFolderPath();

    const exists = useMemo(()=>{
        return CoinIconCodeList.find(x=>x === (code||'').toLowerCase());
    }, [code]);

    const imagePath = useMemo(() => {
        const path = (folderPath || '').replace(/\/+$/, '');
        return `${path}/${type}/${code}.svg`;
    }, [folderPath, code]);

    const svgAttrs: Partial<HTMLAttributes<HTMLDivElement>> = useMemo(() => {

        const style: React.CSSProperties = {
            display: 'inline-block',
            height: '1em',
            width: '1em'
        };
        
        if(type === 'simple'){
            const mask = `url(${imagePath}) no-repeat center`;            
            style.backgroundColor = 'var(--coinIconColor)';
            style.mask = mask;
            style.WebkitMask= mask;            
        }
        else {
            style.backgroundImage = `url(${imagePath})`;
            style.backgroundPosition ='center';
            style.backgroundSize = 'contain';
            style.backgroundRepeat = 'no-repeat';
    // background-position: center;
    // background-size: contain;
    // background-repeat: no-repeat;
        }
        
        return {
            style,
            ...props,
        };
    }, [style, type, imagePath, props]);

    return exists? <div {...svgAttrs} />:null;
};
