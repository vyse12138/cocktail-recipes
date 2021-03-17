import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/:name",
      props: true,
      component: Detail
    },
    {
      path: "/:pathMatch(.*)*",
      component: Home
    }
  ]
});

export default router;
