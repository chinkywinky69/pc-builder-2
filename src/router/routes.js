import BuildPageVue from "../pages/BuildPage.vue";
import CustomPageVue from "../pages/CustomPage.vue";
import HomePageVue from "../pages/HomePage.vue";
import AboutPageVue from "../pages/AboutPage.vue";
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: HomePageVue, name: "home" }],
  },
  {
    path: "/build",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: BuildPageVue,
        name: "build",
      },
      {
        path: "/custom",
        component: CustomPageVue,
        name: "custom",
      },
    ],
  },
  {
    path: "/about",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: AboutPageVue,
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
