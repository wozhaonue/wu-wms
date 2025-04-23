import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import LoginPage from '@/pages/LoginPage.vue'
import RegisterPage from '@/pages/RegisterPage.vue'
import AdminPage from '@/pages/AdminPage.vue'
import UserPage from '@/pages/UserPage.vue'
import WarehousePage from '@/pages/WarehousePage.vue'
import CategoryPage from '@/pages/CategoryPage.vue'
import GoodsPage from '@/pages/GoodsPage.vue'
import RecordPage from '@/pages/RecordPage.vue'
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
      path: '/record',
      name:'record',
      component: RecordPage,
    },
  ],
})

export default router
