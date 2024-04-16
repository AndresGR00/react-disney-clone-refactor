import { useEffect, useRef } from "react";
import { useState } from "react";

const ChangeThemeButton = () => {
  const htmlRef = useRef(document.documentElement);
  const [theme, setTheme] = useState("dark");

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

  return (
    <svg
      aria-hidden="true"
      aria-label="theme"
      role="img"
      version="1.1"
      viewBox="0 0 36 36"
      width="34"
      height="34"
      className="dark:fill-slate-100 fill-neutral-950 mt-3 cursor-pointer"
      onClick={onHandleChangeTheme}
    >
      <path d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"></path>
    </svg>
  );
};

export default ChangeThemeButton;
