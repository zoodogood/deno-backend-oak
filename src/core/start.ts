import { config } from "@config";
import { startApp as startOak } from "@core/server/mod.ts";
import { events } from "@core/events/mod.ts";
import { startApp } from "@core/app/mod.ts";

// --------------
events.handleAll();

// --------------
await startOak(config);

// --------------
await startApp();
