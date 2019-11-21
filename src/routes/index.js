import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../pages/Home";
import SteamCollectionResolver from "../pages/SteamCollectionResolver";

Vue.use(VueRouter);

const routes = [
    {path: '/tools/steam-collection-resolver', component: SteamCollectionResolver},
    {path: '/', component: Home}
];

const router = new VueRouter({
    routes
});

export default router;
