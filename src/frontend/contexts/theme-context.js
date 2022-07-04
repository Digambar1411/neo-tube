import { useState, useContext, createContext,useLayoutEffect, useEffect} from "react";

const ThemeContext = createContext();

const useTheme = ()=>useContext(ThemeContext);

const ThemeProvider = ({children})=>{

  const initialValue= localStorage.getItem("theme");

    const [theme, setTheme]= useState(initialValue);

    const toggleTheme=()=>{
        setTheme((theme)=>(theme==="light"? "dark": "light"));
    }

    useEffect(() => {
      localStorage.setItem("theme", theme);
  }, [theme]);

    useLayoutEffect(() => {
        if (theme === "light") {
          document.documentElement.setAttribute("theme-class", "light");
        } else {
          document.documentElement.setAttribute("theme-class", "dark");
        }
      }, [theme]);

    return(
  
        <ThemeContext.Provider value ={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider, useTheme}