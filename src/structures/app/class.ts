import Model from "./schema.ts";
import type { ISchema } from "./schema.ts";

class App {
  document?: ISchema;

  fetch() {
    const name = "App";
    const document = Model.findOne({ name }) ?? Model.insertOne({ name });

    this.document = document;

    this.updateProtocol();
  }

  private updateProtocol() {
    const TIMEOUT = 60_000;
    setInterval(() => Model.save(), TIMEOUT);
  }
}

export { App };
export default App;
