import { createRouter, createWebHistory } from 'vue-router'
import Quizz from '../views/Quizz.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'quizz',
			component: Quizz,
		},
		{
			path: '/results/:sessionId',
			name: 'results',
			component: () => import('../views/Results.vue'),
		},
	],
})

export default router
