import styles from "./UiInput.module.scss";
import close from "../../../assets/images/close.svg";

const UiInput = ({
  onClick,
  value,
  maxLength,
  type,
  onChange,
  placeholder,
}) => {
  return (
    <div className={styles.myInput}>
      <input
        value={value}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        maxLength={maxLength}
      />
      <img onClick={onClick} src={close} alt="" />
    </div>
  );
};

export default UiInput;
