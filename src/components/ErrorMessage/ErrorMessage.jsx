import styles from "./ErrorMessage.module.scss";

const ErrorMessage = () => {
  return (
    <div className="scrolling-text">
      <p className="text">
        The dark side of the force has won.
        <br />
        We cannot display data.
        <br />
        Come back when we fix everything.
      </p>
    </div>
  );
};

export default ErrorMessage;
