import { Application, Middleware } from "./deps.ts";

import { default as IConfig } from "@config";
import { router, timing } from "./middleware/mod.ts";

const app = new Application();

const setMiddleware = (app: Application, middleware: Middleware[]) => {
  for (const element of middleware) {
    app.use(element);
  }
};

export async function startApp(config: typeof IConfig): Promise<void> {
  const { server: serverConfig } = config;
  const { startOptions, debug: needDebug } = serverConfig;

  setMiddleware(app, [timing, router]);

  app
    .listen(startOptions)
    .then(() => needDebug && console.log("[SERVER]", "is launched"))
    .catch((error) => needDebug && console.error("[SERVER]", error));

  await new Promise((resolve) =>
    app.addEventListener("listen", resolve, { once: true })
  );

  return;
}

export function getOakApp(): Application {
  return app;
}

export const oakApp = app;
