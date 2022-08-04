import React, { createContext, useContext } from "react";

const UseThemeContext = createContext(null);

export function UseThemeProvider({ children }) {
  const navTheme = {
    beige: {
      background: "#FDF1FD",
    },
    blue: {
      background: "#D8DFFE",
    },
  };
  return (
    <UseThemeContext.Provider value={{ navTheme }}>
      {children}
    </UseThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(UseThemeContext);
}
