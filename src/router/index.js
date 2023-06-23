import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/mypets",
      name: "pets",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/mypets.vue"),
    },
    {
      path: "/service/:id",
      name: "service",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/service-content.component.vue"),
    },
    {
      path: "/service/:id/booked",
      name: "booked",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CreatedBookedView.vue"),
    },
    {
      path: "/petlist",
      name: "list",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/petListView.vue"),
    },
    {
      path: "/mis-servicios",
      name: "mis-servicios",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MisServicios.vue"),
    },
    {
      path: "/help",
      name: "help",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/helpCenterView.vue"),
    },
    {
      path: "/log",
      name: "log",
      component:()=>import("../views/LogView.vue"),
    },
    {
      path: "/login",
      name: "login",
      component:()=>import("../views/LogInView.vue"),
    },
    {
      path: "/signin",
      name: "signin",
      component:()=>import("../views/SignInView.vue"),
    },
    {
      path: "/my-account",
      name: "account",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/userProfile.vue"),
    },
    {
      path: "/misfavoritos",
      name: "favoritos",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MisFavoritos.vue"),
    },
  ],
});

export default router;
