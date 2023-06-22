import { Link } from "react-router-dom";
import styles from "./SearchPageInfo.module.scss";

const SearchPageInfo = ({ people }) => {
  return (
    <>
      <div className={styles.content}>
        {people.length > 0 ? (
          <ul className={styles.list}>
            {people.map(({ id, name, img }) => (
              <li className={styles.list__item} key={id}>
                <Link to={`/people/${id}`}>
                  <img src={img} alt="" />
                  <p>{name}</p>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className={styles.comment}>No Results</h2>
        )}
      </div>
    </>
  );
};

export default SearchPageInfo;
