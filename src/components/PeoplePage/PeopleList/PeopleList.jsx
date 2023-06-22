import PeopleListItem from "../PeopleListItem/PeopleListItem";
import PropTypes from "prop-types";

import styles from "./PeopleList.module.scss";
import { useSpring, animated } from "@react-spring/web";

const PeopleList = ({ people }) => {
  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  return (
    <animated.div style={props}>
      {people && (
        <ul className={styles.list}>
          {people.map(({ name, img, id }) => (
            <PeopleListItem key={id} id={id} img={img} name={name} />
          ))}
        </ul>
      )}
    </animated.div>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array,
};

export default PeopleList;
