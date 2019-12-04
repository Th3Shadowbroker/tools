import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "../pages/Home";
import SteamCollectionResolver from "../pages/SteamCollectionResolver";
import NotFound from "../pages/NotFound";
import Policies from "../pages/Policies";
import PasswordGenerator from "../pages/PasswordGenerator";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/tools/steam-collection-resolver', component: SteamCollectionResolver},
    {path: '/tools/password-generator', component: PasswordGenerator},
    {path: '/policies', component: Policies},
    {path: '*', component: NotFound}
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
