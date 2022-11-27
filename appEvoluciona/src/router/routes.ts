import { RouteRecordRaw } from 'vue-router';
const Login = () => import('src/pages/Login/LoginPage.vue')

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   component: () => import('layouts/MainLayout.vue'),
  //   children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  // },

  // // Always leave this as last one,
  // // but you can also remove it
  // {
  //   path: '/:catchAll(.*)*',
  //   component: () => import('pages/ErrorNotFound.vue'),
  // },
  // login
  {
    name: 'login',
    path: '/login',
    component: Login,
    meta: {
        middleware: 'guest',
        title: 'Login'
    }
},
];

export default routes;
