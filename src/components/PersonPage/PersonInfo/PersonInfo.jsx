import styles from "./PersonInfo.module.scss";

const PersonInfo = ({ personInfo }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {personInfo.map(({ title, data }) => {
          return data ? (
            <li key={title} className={styles.list__item}>
              <span className={styles.item__title}>{title}</span>: {data}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default PersonInfo;
