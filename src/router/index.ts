import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name:'register',
      component: RegisterPage,
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminPage,
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage,
    },
    {
      path: '/warehouse',
      name: 'warehouse',
      component: WarehousePage,
    },
    {
      path: '/category',
      name: 'category',
      component: CategoryPage,
    },
    {
      path: '/goods',
      name: 'goods',
      component: GoodsPage,
    },
    {
      path: 'record',
      name:'record',
      component: RecordPage,
    },
  ],
})

export default router
