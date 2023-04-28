import { Router, Application, Context } from "@core/server/deps.ts";
import { app } from "@core/exports.ts";

export default (_oakApp: Application, router: Router) => {
  router.get("/", (context: Context) => {
    const document = app.document!;

    document.usesCounterValue ||= 0;

    const counterValue = ++document.usesCounterValue;
    document.update({ name: document.name });

    context.response.body = `Это ${counterValue} посещение сайта. Количество посещений будет сохранено после перезапуска`;
  });
};
