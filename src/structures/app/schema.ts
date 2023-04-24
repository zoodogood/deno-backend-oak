import { Document } from "@core/database/deps.ts";
import { database } from "@core/exports.ts";

interface ISchema extends Document {
  name: string;
  usesCounterValue?: number;
}

const model = await database.getCollection<ISchema>("App");

export { model };
export type { ISchema };
export default model;
