import { Context, Router, Application } from "@core/server/deps.ts";
import * as _routes from './routes/mod.ts';

type route = (app: Application, router: Router) => unknown;

export default (context: Context, next: () => Promise<unknown>) => {
	const router = new Router();
	
	const routes: route[] = Object.values(_routes);
	
	for (const callback of routes){
		callback(context.app, router);
	}
	

	
	(router.routes())(context, next);
} 