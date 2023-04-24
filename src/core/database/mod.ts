import { FileDB } from "./deps.ts";
import { default as config } from "@config";

const database = new FileDB(config.database.startOptions);
export { database };
