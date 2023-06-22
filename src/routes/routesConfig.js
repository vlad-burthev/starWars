import NotFoundPage from "@/containers/NotFoundPage/NotFoundPage";
import HomePage from "@/containers/HomePage/HomePage";
import PeoplePage from "@/containers/PeoplePage/PeoplePage";
import PersonPage from "@/containers/PersonPage/PersonPage";
import FavoritesPage from "@/containers/FavoritesPage/FavoritesPage";
import SearchPage from "@/containers/SearchPage/SearchPage";

const routesConfig = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/people",
    exact: true,
    component: PeoplePage,
  },
  {
    path: "/search",
    exact: true,
    component: SearchPage,
  },
  {
    path: "/people/:id",
    exact: true,
    component: PersonPage,
  },
  {
    path: "/favorites",
    exact: true,
    component: FavoritesPage,
  },
  {
    path: "*",
    exact: false,
    component: NotFoundPage,
  },
];

export default routesConfig;
