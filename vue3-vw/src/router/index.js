import { createRouter, createWebHistory } from 'vue-router'

const routes = [
	{
		name: 'notFound',
		path: '/:path(.*)+',
		redirect: {
			name: 'Home'
		}
	},
	{
		name: 'Home',
		path: '/home',
		component: () => import('../views/home/Home.vue'),
		meta: {
			title: '首页'
		}
	},
	{
		name: 'About',
		path: '/about',
		component: () => import('../views/about/About.vue'),
		meta: {
			title: '关于'
		}
	}
]

const router = createRouter({
	routes,
	// history: createWebHashHistory()
	history: createWebHistory()
})

router.beforeEach((to, from, next) => {
	const title = to.meta && to.meta.title
	if (title) {
		document.title = title
	}
	next()
})

export default router