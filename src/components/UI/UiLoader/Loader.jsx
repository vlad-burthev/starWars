import styles from "./Loader.module.scss";
import cn from "classnames";

const Loader = () => {
  return (
    <div className={cn(styles.loader, styles.loader1)}>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
