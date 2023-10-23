import {createRouter, createWebHistory} from 'vue-router';

import MainPage from "../pages/MainPage.vue";
import ChoicePage from "../pages/ChoicePage.vue";
import FoodPage from "../pages/FoodPage.vue";
import MapPage from "../pages/MapPage.vue";
import PricingPage from "../pages/PricingPage.vue";



const routes = [
    {path: '/', name: 'main', component: MainPage},
    {path: '/choice', name:'choice', component: ChoicePage},
    {path: '/food', name:'food', component: FoodPage},
    {path: '/map', name: 'map', component: MapPage},
    {path: '/pricing', name: 'pricing', component: PricingPage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;