import styles from "./NavBar.module.scss";
import Logo from "../../assets/Logo.png";
import {
  Bars3BottomRightIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={styles.navContainer}>
      <div className={styles.logoContainer}>
        <img src={Logo} alt="Logo StreamVibe" />
        <span>StreamVibe</span>
      </div>
      <div
        className={isMenuOpen ? styles.Menu : `${styles.Menu} ${styles.hide}`}
      >
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <NavLink
              onClick={closeMenu}
              to={"/"}
              className={({ isActive }) => (isActive ? `${styles.active}` : ``)}
              end
            >
              Home
            </NavLink>
          </li>

          <li className={styles.menuItem}>
            <NavLink
              onClick={closeMenu}
              to={"/movies-and-series"}
              className={({ isActive }) => (isActive ? `${styles.active}` : ``)}
              end
            >
              Movies & Series
            </NavLink>
          </li>
          <li className={styles.menuItem}>
            <NavLink
              onClick={closeMenu}
              to={"/series"}
              className={({ isActive }) => (isActive ? `${styles.active}` : ``)}
              end
            >
              Support
            </NavLink>
          </li>
        </ul>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search" />
          <button>
            <MagnifyingGlassIcon color="white" width={24} height={24} />
          </button>
        </div>
      </div>

      <button
        className={styles.barsButton}
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? (
          <XMarkIcon color="white" width={24} height={24} />
        ) : (
          <Bars3BottomRightIcon color="white" width={24} height={24} />
        )}
      </button>
    </nav>
  );
};

export default NavBar;
