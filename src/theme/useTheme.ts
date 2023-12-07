import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";


interface UseThemeResult {
    ChangeTheme: () => void
    theme: Theme
}


export function useTheme(): UseThemeResult {


    const {theme, setTheme} = useContext(ThemeContext)


    const ChangeTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.WHITE : Theme.DARK
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, ChangeTheme}

}