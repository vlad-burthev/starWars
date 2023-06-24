import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { Container } from "../UI/Container/Containers";
import Favorite from "../Favorite/Favorite";
import Green from "../../assets/images/yoda.svg";
import Blue from "../../assets/images/skyw.svg";
import Red from "../../assets/images/dart.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { BLUE_THEME, GREEN_THEME, RED_THEME } from "@/constants/themes";

const Header = () => {
  const theme = useSelector((state) => state.themes.theme);
  const [icon, setIcon] = useState(Green);
  useEffect(() => {
    switch (theme) {
      case GREEN_THEME:
        setIcon(Green);
        break;

      case BLUE_THEME:
        setIcon(Blue);
        break;

      case RED_THEME:
        setIcon(Red);
        break;

      default:
        setIcon(Green);
    }
  }, [theme]);

  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <ul className={styles.list}>
            <li className={styles.list__logo}>
              <img src={icon} alt="" />
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/people/?page=1">People</NavLink>
            </li>
            <li>
              <NavLink to="/notfound">Not found page</NavLink>
            </li>
            <li>
              <NavLink to="/search">Search</NavLink>
            </li>
          </ul>
          <Favorite />
        </div>
      </Container>
    </div>
  );
};

export default Header;
