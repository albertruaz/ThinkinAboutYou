import { RouteDefinition } from "@solidjs/router";
import Home from "./pages/Home";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Home,
  },
];

export default routes;
