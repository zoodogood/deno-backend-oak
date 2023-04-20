import { Context } from "@core/server/deps.ts";




export default async (context: Context, next: CallableFunction) => {
	const start = Date.now();
  	await next();
  	const ms = Date.now() - start;
	console.log({ms});
	
  	context.response.headers.set("X-Response-Time", `${ms}ms`);
} 