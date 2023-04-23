import mongoose from "./deps.ts";
import { default as IConfig } from "@config";

export async function startApp(config: typeof IConfig): Promise<void> {
  const databaseConfig = config.database;
  const needDebug = databaseConfig.debug;

  await mongoose
    .connect(databaseConfig.uri)
    .then(() => needDebug && console.info("[DATABASE]", "is launched"))
    .catch((error: Error) => needDebug && console.error("[DATABASE]", error));
}

export const mongooseApp = mongoose;
