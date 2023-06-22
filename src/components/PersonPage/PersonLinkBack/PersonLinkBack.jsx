import { useNavigate } from "react-router-dom";
import styles from "./PersonLinkBack.module.scss";
import arrowLeft from "../../../assets/images/arrow-left.png";

const PersonLinkBack = () => {
  const back = useNavigate();

  const goBack = () => back(-1);

  return (
    <div className={styles.btn__container}>
      <button className={styles.back__btn} onClick={goBack}>
        <img src={arrowLeft} alt="arrowLeft" />
        <span>Go back</span>
      </button>
    </div>
  );
};

export default PersonLinkBack;
