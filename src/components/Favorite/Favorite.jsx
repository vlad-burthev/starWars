import styles from "./Favorite.module.scss";
import favorite from "../../assets/images/favorite.svg";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Favorite = () => {
  const favorites = useSelector((state) => state.toFavorite.favorite);
  const favoritesLength = Object.keys(favorites).length;
  const location = useLocation();

  return (
    <div className={styles.favorite}>
      <Link to="/favorites">
        <span className={styles.counter}>{favoritesLength}</span>
        <img src={favorite} className={styles.icon} alt="" />
      </Link>
    </div>
  );
};

export default Favorite;
