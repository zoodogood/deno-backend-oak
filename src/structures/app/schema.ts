import { Model } from "@lib/DatabaseModel.ts";
import { database } from "@core/exports.ts";

interface ISchema {
  name: string;
  usesCounterValue?: number;
}

const model = new Model<ISchema>("App", database);

export { model };
export type { ISchema };
export default model;
