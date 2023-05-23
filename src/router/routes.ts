import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', redirect: { name: 'gallery' } },
      { path: 'gallery', name: 'gallery', component: () => import('pages/GalleryPage.vue') },
      { path: 'about', name: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/ContactPage.vue') },
      { path: ':nomArticle', name: 'article', component: () => import('pages/ArticlePage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/GalleryPage.vue'),
  },
];

export default routes;
