import { makeConcurrentRequest } from "@/utils/network";
import styles from "./PersonFilms.module.scss";
import { useEffect, useState } from "react";

const PersonFilms = ({ personFilms }) => {
  const [filmsName, setFilmsName] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await makeConcurrentRequest(personFilms);

      setFilmsName(response);
    })();
  }, [personFilms]);

  return (
    <div className={styles.wrapper}>
      <ul className={styles.films__list}>
        {filmsName
          .sort((a, b) => a.episode_id - b.episode_id)
          .map(({ title, episode_id }) => (
            <li className={styles.films__item} key={episode_id}>
              <span className={styles.item__episode}>Episode {episode_id}</span>
              <span className={styles.item__colon}> : </span>
              <span className={styles.item__title}>{title}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PersonFilms;
