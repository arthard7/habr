import React, {FC, ReactNode, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import {Simulate} from "react-dom/test-utils";
import animationEnd = Simulate.animationEnd;


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.WHITE

type PropsType = {
    children: ReactNode
}


const ThemeProvider = ({children}: PropsType) => {

    const [theme, setTheme] = useState<Theme>(defaultTheme)




    const defaultProps = useMemo(() => ({

        theme,
        setTheme: setTheme

    }), [theme])


    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;