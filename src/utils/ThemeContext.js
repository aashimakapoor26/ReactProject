import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevState => !prevState);
    }
    const theme = isDarkMode ? 'dark' : 'light';

    return <ThemeContext.Provider value = {{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const themeConsumer = () => {
    return useContext(ThemeContext);
}