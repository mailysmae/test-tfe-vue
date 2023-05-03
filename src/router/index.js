import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import RegleDouloureuse from '../pages/RegleDouloureuse.vue'
import PrecariteMentruel from '../pages/PrecariteMenstruel.vue'
import Speak from '../pages/Speak.vue'


const router = createRouter({
    routes: [
        { 
            path: '/', 
            component: Home 
        },
        { 
            path: '/douleur', 
            component: RegleDouloureuse
        },
        { 
            path: '/precarite', 
            component: PrecariteMentruel
        },
        { 
            path: '/speak', 
            component: Speak
        }
    ],
    history: createWebHashHistory()
})

export default router