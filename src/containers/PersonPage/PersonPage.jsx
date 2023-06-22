import { useParams } from "react-router-dom";
import styles from "./PersonPage.module.scss";
import { getApiResource } from "@/utils/network";
import { useEffect, useState, lazy, Suspense } from "react";
import { API_PERSON } from "@/constants/api";
import { Container } from "@/components/UI/Container/Containers";
import { withErrorApi } from "@/hoc/withErrorApi";
import { getPeopleImage } from "@/services/getPeopleData";
import { useSpring, animated } from "@react-spring/web";
import PersonInfo from "@/components/PersonPage/PersonInfo/PersonInfo";
import PersonPhoto from "@/components/PersonPage/PersonPhoto/PersonPhoto";
import PersonLinkBack from "@/components/PersonPage/PersonLinkBack/PersonLinkBack";
import Loader from "@/components/UI/UiLoader/Loader";
import { useSelector } from "react-redux";

const PersonFilms = lazy(() =>
  import("@/components/PeoplePage/PersonFilms/PersonFilms")
);

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();

  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  const [personInfo, setPersonInfo] = useState([]);
  const [personName, setPersonName] = useState("");
  const [personPhoto, setPersonPhoto] = useState("");
  const [personFilms, setPersonFilms] = useState([]);
  const [personFavorite, setPersonFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  const storeData = useSelector((state) => state.toFavorite.favorite);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      storeData[id] ? setPersonFavorite(true) : setPersonFavorite(false);

      if (res) {
        setPersonInfo([
          { title: "Height", data: res.hight },
          { title: "Mass", data: res.mass },
          { title: "Hair Color", data: res.hair_color },
          { title: "Skin Color", data: res.skin_color },
          { title: "Eye Color", data: res.eye_color },
          { title: "Birth Year", data: res.birth_year },
          { title: "Gender", data: res.gender },
        ]);

        setPersonName(res.name);

        res.films && setPersonFilms(res.films);

        setPersonPhoto(getPeopleImage(id));
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    };
    setLoading(false);
    fetchData();
  }, [id]);

  return (
    <animated.div stype={props}>
      <Container>
        {!personPhoto ? (
          <Loader />
        ) : (
          <>
            <div className={styles.content}>
              <PersonLinkBack />
              <span className={styles.person__name}>{personName}</span>
              <div className={styles.container}>
                <PersonPhoto
                  personPhoto={personPhoto}
                  personName={personName}
                  personFavorite={personFavorite}
                  setPersonFavorite={setPersonFavorite}
                  id={id}
                />
                {personInfo && <PersonInfo personInfo={personInfo} />}

                {personFilms && (
                  <Suspense fallback={<Loader />}>
                    <PersonFilms personFilms={personFilms} />
                  </Suspense>
                )}
              </div>
            </div>
          </>
        )}
      </Container>
    </animated.div>
  );
};

export default withErrorApi(PersonPage);
