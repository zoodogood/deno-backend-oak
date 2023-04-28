import { createClient } from "./deps.ts";
import { default as config } from "@config";

const database = createClient(config.database.uri, config.database.apiKey!);

export { database };
