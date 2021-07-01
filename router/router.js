import Router from "vue-router";
import checkAuth from "../middlewares/checkAuth.js";
import Home from "./components/home.vue";

const isAuthenticated = true;

const router = new Router({
  routes: [
      { path: '*', redirect: '/'},
      { path: '/home', component: Home}
  ],
  mode: "history",
});
router.beforeEach((to, from, next) => {
  checkAuth(next, isAuthenticated);
});
