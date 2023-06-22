import styles from "./UIButton.module.scss";
import cn from "classnames";

const UIButton = ({ theme = "dark", onClick, children, classes, ...props }) => {
  return (
    <button
      className={cn(styles["button"], styles[theme], classes)}
      {...props}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default UIButton;
