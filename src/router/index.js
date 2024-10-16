import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/pages/home/index.vue'),
  },
  {
    path: "/quizz",
    name: "quizz",
    component: () => import('@/pages/home/quizz.vue'),
  },
  {
    path: "/blog-detail",
    name: "blog-details",
    component: () => import('@/pages/home/blog-detail.vue'),
  },

  {
    path: "/blog-detail/:id",
    name: "blog-detail",
    component: () => import('@/pages/home/blog-detail.vue'),
  },

  {
    path: "/contact-one",
    name: "blog-details",
    component: () => import('@/pages/home/contact.vue'),
  },
  {
    path: "/:catchAll(.*)",
    name: "Error",
    component: () => import('@/pages/home/page-error.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;