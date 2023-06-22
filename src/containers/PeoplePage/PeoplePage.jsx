import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getApiResource } from "@/utils/network";
import { withErrorApi } from "@/hoc/withErrorApi";
import PeopleList from "@/components/PeoplePage/PeopleList/PeopleList";
import {
  getPeopleId,
  getPeopleImage,
  getPeoplePageId,
} from "@/services/getPeopleData";
import { API_PEOPLE } from "@/constants/api";
import Loader from "@/components/UI/UiLoader/Loader";
import { useSpring, animated } from "@react-spring/web";
import { useQueryParams } from "@/hooks/useQueryParams";
import PeopleNavigation from "@/components/PeoplePage/PeopleNavigation/PeopleNavigation";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState([]);
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [counterPage, setCounterPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const [props] = useSpring(
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  );

  const query = useQueryParams();
  const queryPage = query.get("page");

  const getResource = async (url) => {
    const res = await getApiResource(url);
    setPeople([]);

    if (res) {
      const peopleList = res.results.map(({ name, url }) => {
        const id = getPeopleId(url);
        const img = getPeopleImage(id);

        return {
          id,
          name,
          img,
        };
      });

      setPeople(peopleList);
      setLoading(false);

      setPrevPage(res.previous);
      setCounterPage(getPeoplePageId(url));
      setNextPage(res.next);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  };

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <>
      <animated.div style={props}>
        <PeopleNavigation
          setPeople={setPeople}
          setLoading={setLoading}
          getResource={getResource}
          nextPage={nextPage}
          prevPage={prevPage}
          setCounterPage={setCounterPage}
          counterPage={counterPage}
        />
        {loading ? <Loader /> : <PeopleList people={people} />}
      </animated.div>
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func,
};

export default withErrorApi(PeoplePage);
