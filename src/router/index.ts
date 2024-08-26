import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import routes from "./routes";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes as RouteRecordRaw[],
});

export function setupRouter(app: any) {
  app.use(router);
}
