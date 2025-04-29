import React, { createContext, useContext, useState } from 'react'

type Theme = {
  colors: {
    primary: string
    background: string
    text: string
    border: string
  }
  dark: boolean
}

type ThemeContextType = {
  theme: Theme
  toggleTheme: () => void
  isDark: boolean
}

const lightTheme: Theme = {
  colors: {
    primary: '#007AFF',
    background: '#F5F5F5',
    text: '#1C1C1E',
    border: '#D1D1D6',
  },
  dark: false,
}

const darkTheme: Theme = {
  colors: {
    primary: '#0A84FF',
    background: '#1C1C1E',
    text: '#F5F5F5',
    border: '#3A3A3C',
  },
  dark: true,
}

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
})

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
  };

  const theme = isDark ? darkTheme : lightTheme

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext)