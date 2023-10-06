import {createRouter, createWebHistory} from 'vue-router';

import MainPage from "../pages/MainPage.vue";
import ChoicePage from "../pages/ChoicePage.vue";



const routes = [
    {path: '/', name: 'main', component: MainPage},
    {path: '/choice', name:'choice', component: ChoicePage}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;