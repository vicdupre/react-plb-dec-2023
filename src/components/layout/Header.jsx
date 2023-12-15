import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.root}>
      <h1 className={classes.title}>React PLB</h1>
      <nav className={classes.linkContainer}>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
          to={"/"}
        >
          Acceuil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
          to={"/title"}
        >
          Title
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
          to={"/people"}
        >
          Personnes
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? classes.activeLink : classes.link
          }
          to={"/articles"}
        >
          Articles
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
