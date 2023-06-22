import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import {
  removePersonFromFavorit,
  addPersonToFavorit,
} from "@/store/toFavorite/toFavoriteSlice";
import favoriteTo from "../../../assets/images/favoriteTo.svg";
import favoriteFrom from "../../../assets/images/favoriteFrom.svg";
import styles from "./PersonPhoto.module.scss";

const PersonPhoto = ({ personPhoto, personName, id, personFavorite }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(personFavorite);

  useEffect(() => {
    setIsFavorite(personFavorite);
  }, [personFavorite]);

  const dispatchFavoritePeople = () => {
    if (isFavorite) {
      dispatch(removePersonFromFavorit(id));
      setIsFavorite(false);
    } else {
      dispatch(
        addPersonToFavorit({
          [id]: {
            name: personName,
            img: personPhoto,
          },
        })
      );
      setIsFavorite(true);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img className={styles.photo} src={personPhoto} alt={personName} />

        <button className={styles.button} onClick={dispatchFavoritePeople}>
          {isFavorite ? (
            <img src={favoriteFrom} alt="" />
          ) : (
            <img src={favoriteTo} alt="" />
          )}
        </button>
      </div>
    </div>
  );
};

export default PersonPhoto;
