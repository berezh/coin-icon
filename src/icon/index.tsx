import React, { HTMLAttributes, useMemo } from 'react';
import { CoinIconCode, CoinIconCodeList } from 'src/interfaces';

import { useCoinIconFolderPath } from 'src/provider';

interface Props extends HTMLAttributes<HTMLDivElement> {
    code?: CoinIconCode;
    url?: string;
}

export const CoinIcon: React.FC<Props> = ({ code, url, style, ...props }) => {
    const folderPath = useCoinIconFolderPath();

    const exists = useMemo(()=>{
        return CoinIconCodeList.find(x=>x === (code||'').toLowerCase());
    }, [code]);

    const imagePath = useMemo(() => {
        if(code){
            const path = (folderPath || '').replace(/\/+$/, '');
            return `${path}/${code}.svg`;
        }
        else {
            return url;
        }
    }, [folderPath, code, url]);

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
