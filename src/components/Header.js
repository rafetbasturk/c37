import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({mode}) => {
   const [darkMode, setDarkMode] = useState(true)

   return (
      <header className="header">
         <h1 className="header__logo">Where in the world?</h1>
         <div className="header__mode" onClick={() => {
            mode()
            setDarkMode(!darkMode)
         }}>
            {darkMode ?
               <FaMoon className="header__icon"></FaMoon> :
               <FaSun  className="header__icon"></FaSun>
            }

            <span className="header__text">
               {darkMode ? "Dark Mode": "Light Mode"}
            </span>
         </div>
      </header>
   )
}

export default Header
