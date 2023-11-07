import {createRouter, createWebHistory} from 'vue-router';

import MainPage from "../pages/MainPage.vue";
import ChoicePage from "../pages/ChoicePage.vue";
import FoodPage from "../pages/FoodPage.vue";
import MapPage from "../pages/MapPage.vue";
import PricingPage from "../pages/PricingPage.vue";
import ArticlesPage from "../pages/ArticlesPage.vue";
import InfoPage from "../pages/InfoPage.vue";
import ContactPage from "../pages/ContactPage.vue";



const routes = [
    {path: '/', name: 'main', component: MainPage},
    {path: '/choice', name:'choice', component: ChoicePage},
    {path: '/food', name:'food', component: FoodPage},
    {path: '/map', name: 'map', component: MapPage},
    {path: '/pricing', name: 'pricing', component: PricingPage},
    {path:'/articles', name: 'articles', component: ArticlesPage},
    {path:'/info', name:'info', component: InfoPage},
    {path: '/contact', name: 'contact', component: ContactPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;