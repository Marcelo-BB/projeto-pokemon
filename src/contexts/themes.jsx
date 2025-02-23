import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export const themes  = {
    light: {
        color: '#000000',
        background: '#f9f9f9',
        backgroundCards: '#eeeeee',
        cardShadow: '0, 0, 0, 0.3',
        hoverBTNbg: '#19191a',
        hoverBTNcolor: '#f9f9f9',
        returnBTNbg: '#f2ff00'
    },

    dark: {
        color: '#ffffff',
        background: '#19191a',
        backgroundCards: '#373739',
        cardShadow: '255, 255, 255, 0.3',
        backgroundHeader: '#021d34',
        hoverBTNbg: '#f9f9f9',
        hoverBTNcolor: '#000000',
        returnBTNbg: '#ff7043'
    }
}

export const ThemeContext = createContext({ theme: themes.light, setTheme: () => {} });

export const ThemeProvider = ({children}) => {
    const [ theme, setTheme] = useState(themes.light)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}> 
            <StyledThemeProvider theme={theme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider> 
    )
}
