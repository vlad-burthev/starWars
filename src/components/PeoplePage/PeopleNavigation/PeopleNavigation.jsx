import { SWAPI_PARAM_PAGE } from "@/constants/api";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./PeopleNavigation.module.scss";
import UIButton from "@/components/UI/UiButton/UIButton";

const PeopleNavigation = ({
  getResource,
  nextPage,
  prevPage,
  counterPage,
  setLoading,
  setCounterPage,
  setPeople,
}) => {
  const handleChangeNext = () => {
    setPeople([]);
    getResource(nextPage);
    setLoading(true);
    setCounterPage(counterPage + 1);
  };

  const handleChangePrev = () => {
    setPeople([]);
    getResource(prevPage);
    setLoading(true);
    setCounterPage(counterPage - 1);
  };

  return (
    <div className={styles.navigation}>
      <Link to={`/people/${SWAPI_PARAM_PAGE + (counterPage - 1)}`}>
        <UIButton disabled={!prevPage} onClick={handleChangePrev}>
          Previous
        </UIButton>
      </Link>
      <Link to={`/people/${SWAPI_PARAM_PAGE + (counterPage + 1)}`}>
        <UIButton disabled={!nextPage} onClick={handleChangeNext}>
          Next
        </UIButton>
      </Link>
    </div>
  );
};

export default PeopleNavigation;
