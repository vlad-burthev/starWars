import { Container } from "@/components/UI/Container/Containers";
import styles from "./HomePage.module.scss";
import PropTypes from "prop-types";
import ChooseTheme from "@/components/HomePage/ChooseTheme/ChooseTheme";

const HomePage = () => {
  return (
    <Container>
      <h1 className="header__text">Home Page</h1>
      <ChooseTheme />
    </Container>
  );
};

HomePage.propTypes = {};

export default HomePage;
