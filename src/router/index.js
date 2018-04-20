import Vue from "vue";
import Router from "vue-router";
import GettingStarted from "@/components/GettingStarted";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "GettingStarted",
      component: GettingStarted
    }
  ]
});
