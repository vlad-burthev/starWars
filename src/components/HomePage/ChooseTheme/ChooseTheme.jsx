import { changeTheme } from "@/store/themes/themesSlice";
import styles from "./ChooseTheme.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BLUE_THEME, GREEN_THEME, RED_THEME } from "@/constants/themes";
import Green from "../../../assets/images/yoda.svg";
import Blue from "../../../assets/images/skyw.svg";
import Red from "../../../assets/images/dart.svg";
import { useState } from "react";
import { changeCssVariables } from "@/services/changeCssVariables";

const ChooseTheme = () => {
  const themesArr = [
    { themeName: GREEN_THEME, photo: Green },
    { themeName: BLUE_THEME, photo: Blue },
    { themeName: RED_THEME, photo: Red },
  ];

  const theme = useSelector((state) => state.themes.theme);
  const dispatch = useDispatch();
  const change = (themeName) => {
    dispatch(changeTheme(themeName));
    changeCssVariables(themeName);
  };

  return (
    <>
      <div className={styles.theme__block}>
        {themesArr.map(({ themeName, photo }) => (
          <div
            key={themeName}
            className={styles.theme}
            onClick={() => change(themeName)}
          >
            <img src={photo} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default ChooseTheme;
