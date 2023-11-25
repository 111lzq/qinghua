import {
	createRouter,
	createWebHistory
} from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [{
			path: '/',
			name: 'home',
			component: () => import('../views/HomeView.vue')
		}, {
			path: '/set',
			name: 'setting',
			component: () => import('../views/SettingView.vue')
		},
		{
			path: '/edu',
			name: 'edu',
			component: () => import('../views/EducationView.vue')
		}, {
			path: '/stu',
			name: 'stu',
			component: () => import('../views/StudyView.vue')
		}, {
			path: '/admi',
			name: 'admi',
			component: () => import('../views/AdmissView.vue')
		}, {
			path: '/team',
			name: 'team',
			component: () => import('../views/TeamView.vue')
		},
		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (About.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () => import('../views/AboutView.vue')
		// }
	]
})

export default router