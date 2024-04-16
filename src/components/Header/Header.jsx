import "./Header.css";
import NavButton from "../NavButton";
import ChangeThemeButton from "../ChangeThemeButton";
import { NavLink } from "react-router-dom";
import { LINKS_DATA } from "../../data/linksNav.data";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full dark:bg-gray-900 bg-slate-400 p-4">
      <NavLink to="">
        <img
          src="https://res.cloudinary.com/dbinlquvz/image/upload/v1708529917/Proyecto_11/logo_v8mgdf.svg"
          alt="Logo Disney"
          className="w-28 logo"
        />
      </NavLink>
      <nav>
        <ul className="flex gap-4">
          {LINKS_DATA.map(({ route, icon, name, id, displayClass }) => (
            <li key={id}>
              <NavLink to={route}>
                <NavButton
                  displayClass={displayClass ? displayClass : null}
                  icon={icon}
                  name={name}
                />
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <ChangeThemeButton />
    </header>
  );
};

export default Header;
