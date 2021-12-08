import React, { createContext, useMemo, useContext } from 'react';

interface CoinContextProps {
    folderPath: string;
}

const ThemeContext = createContext<CoinContextProps>({
    folderPath: 'svg',
});

interface Props {
    folderPath: string;
    children: React.ReactNode;
}

export const CoinIconProvider: React.FC<Props> = ({ folderPath, children }) => {
    const value = useMemo<CoinContextProps>(() => {
        return {
            folderPath,
        };
    }, [folderPath]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useCoinIconFolderPath = (): string => {
    return useContext(ThemeContext)?.folderPath;
};
