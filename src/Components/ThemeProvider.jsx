// ThemeProvider.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

// 1️⃣ Create context
const ThemeContext = createContext();

// 2️⃣ ThemeProvider component
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light"); // default theme

    // Load saved theme from localStorage on mount
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
            document.body.className = savedTheme; // <-- apply class to <body>
        } else {
            document.body.className = theme; // apply default theme
        }
    }, []);

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
        document.body.className = newTheme;
        localStorage.setItem("theme", newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
