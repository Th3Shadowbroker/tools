import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../pages/Home";
import SteamCollectionResolver from "../pages/SteamCollectionResolver";
import NotFound from "../pages/NotFound";

Vue.use(VueRouter);

const routes = [
    {path: '/tools/steam-collection-resolver', component: SteamCollectionResolver},
    {path: '/', component: Home},
    {path: '*', component: NotFound}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
