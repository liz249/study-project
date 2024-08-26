import { RouteRecordRaw } from "vue-router";
import Home from "/@/views/home.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];
export default routes;
