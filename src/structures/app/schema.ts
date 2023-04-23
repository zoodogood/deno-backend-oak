import { model, Schema } from "@core/database/deps.ts";

interface ISchema {
  name: string;
  usesCounterValue: number;
}

const schema = new Schema<ISchema>({
  name: { type: String, unique: true },
  usesCounterValue: { type: Number, default: 0 },
});

export { schema, model };
export type { ISchema };
export default model("App", schema);
