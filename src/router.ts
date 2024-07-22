import { createRouter, createWebHistory } from "vue-router";

async function getRoutes(): Promise<any[]> {
  const routes: any[] = [];

  const modules = import.meta.glob("/**/*.route.ts");
  console.log("modules : ", modules);

  for (const path in modules) {
    console.log("module", path);
    const module: any = await modules[path]();
    routes.push(...module.default);
  }

  console.log("Routes: ", routes);

  return routes;
}

const autoLoadRoute = async () => {
  const routes = await getRoutes();
  console.log(routes);

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
      return { top: 0 };
    },
    routes: [
      {
        path: "/",
        name: "EntryPoint",
      },
      ...routes,
    ],
  });
  console.log(router.getRoutes());
  return router;
};

export default autoLoadRoute;
