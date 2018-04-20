import Vue from "vue";
import Router from "vue-router";
import GettingStarted from "@/components/GettingStarted";
import UserLandingPage from "@/components/UserLandingPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "GettingStarted",
      component: GettingStarted
    },
    {
      path: "/user",
      name: "UserLandingPage",
      component: UserLandingPage
    }
  ]
});
