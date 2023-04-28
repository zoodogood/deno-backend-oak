import Model from "./schema.ts";
import type { ISchema } from "./schema.ts";
import { Document } from "@lib/DatabaseModel.ts";

class App {
  document?: Document<ISchema> & Partial<ISchema>;

  async fetch() {
    const name = "App";
    const document =
      (await Model.fetchOne({ name })) ?? (await Model.insertOne({ name }));

    if (document === null) {
      throw new Error("App is null");
    }

    this.document = document;
  }
}

export { App };
export default App;
