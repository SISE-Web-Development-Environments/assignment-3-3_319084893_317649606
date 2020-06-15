import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
//   {
//     path: "/login",
//     name: "login",
//     component: () => import("./pages/LoginPage")
//   },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/favorites",
    name: "favorites",
    component: () => import("./pages/FavoritesPage")
  },
  {
    path: "/personal",
    name: "personal",
    component: () => import("./pages/PersonalRecipesPage")
  },
  {
    path: "/family",
    name: "family",
    component: () => import("./pages/FamilyRecipesPage")
  },
  {
    path: "/recipe/:recipeId",
    name: "recipe",
    component: () => import("./components/RecipeFull")
  },
  {
    path: "*",
    name: "notFound",
    component: NotFound
  }

];

export default routes;
