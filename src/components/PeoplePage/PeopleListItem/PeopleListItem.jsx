import PropTypes from "prop-types";
import styles from "./PeopleListItem.module.scss";
import { Link } from "react-router-dom";

const PeopleListItem = ({ img, name, id }) => {
  return (
    <li className={styles["list-item"]}>
      <Link to={`/people/${id}`}>
        <div className={styles["list-item-photo"]}>
          <img src={img} alt={name} />
        </div>
        <p className={styles["list-item-name"]}>{name}</p>
      </Link>
    </li>
  );
};

PeopleListItem.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
};

export default PeopleListItem;
