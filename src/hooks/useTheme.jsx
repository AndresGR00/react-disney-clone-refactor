import { useEffect, useRef, useState } from "react";

export const useTheme = (initalState) => {
    const htmlRef = useRef(document.documentElement);
    const [theme, setTheme] = useState(initalState);

    useEffect(() => {
        if (theme === "dark") {
          htmlRef.current.classList.add("dark");
        } else {
          htmlRef.current.classList.remove("dark");
        }
      }, [theme]);
    
      const onHandleChangeTheme = () => {
        setTheme((currentTheme) => {
          return currentTheme === "light" ? "dark" : "light";
        });
      };
      return { onHandleChangeTheme }
}