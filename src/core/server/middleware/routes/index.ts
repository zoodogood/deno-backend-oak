import { Router, Application, Context } from "@core/server/deps.ts";
import { app } from "@core/exports.ts";
import Model from "@structures/app/schema.ts";

export default (_oakApp: Application, router: Router) => {
  router.get("/", (context: Context) => {
    const document = app.document!;
    document.usesCounterValue ||= 0;

    const counterValue = ++document.usesCounterValue;
    Model.updateOne({ name: document.name }, document);

    context.response.body = `Это ${counterValue} посещение сайта. Количество посещений будет сохранено после перезапуска`;
  });
};
