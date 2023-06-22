import { useSelector } from "react-redux";
import styles from "./FavoritesPage.module.scss";
import { useEffect, useState } from "react";
import { Container } from "@/components/UI/Container/Containers";
import PeopleList from "@/components/PeoplePage/PeopleList/PeopleList";

const FavoritesPage = () => {
  const favorite = useSelector((state) => state.toFavorite.favorite);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    const arr = Object.entries(favorite);

    if (arr.length) {
      const res = arr.map((item) => {
        return {
          id: item[0],
          ...item[1],
        };
      });

      setPeople(res);
    }
  }, [favorite]);

  return (
    <Container>
      <h1 className={styles.title}>Favorites</h1>
      {people.length ? (
        <PeopleList people={people} />
      ) : (
        <h2 className={styles.comment}>
          There's no place for favorites in your heart
        </h2>
      )}
    </Container>
  );
};

export default FavoritesPage;
