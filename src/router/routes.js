const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue"), name: "home" },
    ],
  },
  {
    path: "/build",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/build",
        component: () => import("pages/BuildPage.vue"),
        name: "build",
      },
      {
        path: "/custom",
        component: () => import("pages/CustomPage.vue"),
        name: "custom",
      },
    ],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "/about",
        component: () => import("pages/AboutPage.vue"),
        name: "about",
      },
    ],
  },
  //404 ERROR PAGE
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
