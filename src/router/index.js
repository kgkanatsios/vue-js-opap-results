import Vue from "vue";
import VueRouter from "vue-router";

import Template1 from "../views/Template1.vue";
import Template2 from "../views/Template2.vue";
import Template3 from "../views/Template3.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "template1",
        component: Template1
    },
    {
        path: "/template1",
        name: "template1",
        component: Template1
    },
    {
        path: "/template2",
        name: "template2",
        component: Template2
    },
    {
        path: "/template3",
        name: "template3",
        component: Template3
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
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;