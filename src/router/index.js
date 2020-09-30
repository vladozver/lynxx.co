import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/views/Home.vue";
import Favourite from "@/views/Favourite.vue";
import Fullscreen from "@/views/Fullscreen.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/favourite",
    name: "favourite",
    component: Favourite,
  },
  {
    path: "/fullscreen/:id",
    name: "fullscreen",
    component: Fullscreen,
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
