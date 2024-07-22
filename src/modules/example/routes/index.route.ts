import ExampleView from "../views/ExampleView.vue";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "example",
        name: "example",
        component: ExampleView,
      },
    ],
  },
];

export default routes;
