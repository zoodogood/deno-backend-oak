import { App } from "@structures/app/mod.ts";

const app = new App();

export async function startApp() {
  await app.fetch();
}

export default app;
export { app };
