import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OriginalsView from "../views/OriginalsView.vue";
import PrintedView from "../views/PrintedView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/originali",
    name: "originali",
    component: OriginalsView,
  },
  {
    path: "/printeti",
    name: "printeti",
    component: PrintedView,
  },
  {
    path: "/par-mani",
    name: "about",
    component: AboutView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
