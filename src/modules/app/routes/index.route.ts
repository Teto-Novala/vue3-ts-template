import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "home",
        name: "home",
        component: HomeView,
      },
    ],
  },
];

export default routes;
