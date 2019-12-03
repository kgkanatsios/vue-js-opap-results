import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Template1 from "../views/Template1.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/template1",
        name: "template1",
        component: Template1
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path: "/joker",
        name: "joker",
        component: () => import("../views/Joker.vue")
    },
    {
        path: "/lotto",
        name: "lotto",
        component: () => import("../views/Lotto.vue")
    },
    {
        path: "/proto",
        name: "proto",
        component: () => import("../views/Proto.vue")
    },
    {
        path: "/extra5",
        name: "extra5",
        component: () => import("../views/Extra5.vue")
    },
    {
        path: "/super3",
        name: "super3",
        component: () => import("../views/Super3.vue")
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;
