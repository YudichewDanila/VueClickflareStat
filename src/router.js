import { createRouter, createWebHistory } from "vue-router"
import Home from "./pages/Home.vue";
import Login from "./Login.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/home", component: Home },
    {path: "/login", component: Login}
]

export default createRouter({
    history: createWebHistory(),
    routes,
})
