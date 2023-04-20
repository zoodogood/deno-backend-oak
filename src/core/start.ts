
import { config } from '@config';
import { startApp as startOak } from "@core/server/mod.ts";
import { mongooseApp } from "@core/database/mod.ts";
import { events } from "@core/events/mod.ts";
import { startApp } from "@core/app/mod.ts";

// --------------
events.handleAll();

// --------------
startOak(config);

// --------------
mongooseApp.connect(config.database.uri);

// --------------
startApp();