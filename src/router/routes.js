const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue"), name: "home" },
      {
        path: "/about",
        component: () => import("pages/AboutPage.vue"),
        name: "about",
      },
      {
        path: "/build/custom",
        component: () => import("pages/CustomPage.vue"),
        name: "custom",
      },
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
        path: "/build/custom",
        component: () => import("pages/CustomPage.vue"),
        name: "custom",
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
