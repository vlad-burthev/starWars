import { NavLink } from "react-router-dom";
import styles from "./NotFoundPage.module.scss";
import starWars from "../../assets/images/starWars.svg";

const NotFoundPage = () => {
  return (
    <div className="scrolling-text">
      <p className="text">
        <img className={styles.img} src={starWars} alt="" />
        <span style={{ fontSize: 150 }}>404</span> <br />
        This is not the web page
        <br />
        This is the land of the Sith
        <br />
        Go back to Tython (Home page)
        <br />
      </p>
      <NavLink className={styles.link} to="/">
        To perform a lightspeed jump
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
