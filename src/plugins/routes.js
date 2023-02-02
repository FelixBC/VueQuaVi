import {createRouter, createWebHashHistory} from "vue-router";
import MainMenu from "../components/MainMenu.vue";
import Indexx from "../components/Indexx.vue";
import About from "../components/About.vue";
import todo from "../components/todo.vue";


const routes = [
    {
        path: '/',
        component: MainMenu,
        props: true,
        children: [
            {
                path: 'index',
                name: 'index',
                props: true,
                component: Indexx
            }
        ]


    },
    {
        path: '/',
        component: MainMenu,
        props: true,
        children: [
            {
                path: 'About',
                name: 'About',
                props: true,
                component: About

            }
        ]
    },

    {
        path: '/',
        component: MainMenu,
        props: true,
        children: [
            {
                path: 'todo',
                name: 'todo',
                props: true,
                component: todo

            }
        ]
    },

]
const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router