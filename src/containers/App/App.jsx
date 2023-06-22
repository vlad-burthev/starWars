import { Route, Routes } from "react-router-dom";
import "./App.scss";
import routesConfig from "@/routes/routesConfig";
import Header from "@/components/Header/Header";
import Wrapper from "@/components/UI/Wrapper/Wrapper";

const App = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          {routesConfig.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Wrapper>
    </>
  );
};

export default App;
