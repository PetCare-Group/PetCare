import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
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
      path: "/service/:id/:userId",
      name: "service",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/service-content.component.vue"),
    },
    {
      path: "/service/:id/booked/:userId",
      name: "booked",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/CreatedBookedView.vue"),
    },
    {
      path: "/service/:id/booked/:id",
      name: "payment",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/BookingPaymentView.vue"),
    },
    {
      path: "/petlist/:id",
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
      component:()=>import("../views/LogInView2.vue"),
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
    {
      path: "/reserva-exitosa",
      name: "reserva-exitosa",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/reserva-exito.vue"),
    },
    {
      path: "/post-service",
      name: "post-service",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/postServiceView.vue"),
    },

  ],
});

export default router;
