import {createRouter, createWebHistory} from 'vue-router';
import HomePage from "@/pages/HomePage";
import About from "@/pages/About.vue";
import Services from "@/pages/Services.vue";
import Work from "@/pages/Work.vue";
import News from "@/pages/News.vue";
import Contacts from "@/pages/Contacts.vue";
import SeparateNewsComponent from "@/components/SeparateNewsComponent.vue";
import vacancies from "@/pages/Vacancies.vue";


// creating routes to all pages
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: About,
        children: [
            {
                path: '/about/vacancies',
                name:'vacancies',
                component: vacancies
            }
        ]
    },
    {
        path: '/services',
        name: 'services',
        component: Services
    },
    {
        path: '/work',
        name: 'work',
        component: Work
    },
    {
        path: '/news',
        name: 'news',
        component: News,
        children: [
            {
                path: '/news/:id',
                name:'separate-news',
                component: SeparateNewsComponent
            }
        ]
    },
    {
        path: '/contacts',
        name: 'contacts',
        component: Contacts
    },

];

// creating Vue-Router instance with normal history mode
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;