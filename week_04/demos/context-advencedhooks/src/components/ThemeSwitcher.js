import React, { useContext, useEffect } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { IoIosSunny, IoIosMoon } from "react-icons/io";

export default function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useContext(ThemeContext);
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);
    const handleClick = () => {
        setIsDarkMode(!isDarkMode);
    }
  return (
    <div>
        <button onClick={handleClick}>{isDarkMode ? <IoIosSunny /> : <IoIosMoon />}</button>
    </div>
  )
}
