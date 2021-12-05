
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('../components/EssentialLink') },


    ]
  },
  {
    path: "/login",
    component: () => import("components/login")},
  {
    path: "/createAccount",
    component: () => import("components/createAccount")},
  {
    path: "/main",
    component: () => import("components/mainPage")},
  {
    path: "/cart",
    component: () => import("components/cart")},

  {
    path: "/order",
    component: () => import("components/order")},
  {
    path: "/detail",
    component: () => import("components/detail")},
  {
    path: "/confirm",
    component: () => import("components/confirmOrder")},


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
