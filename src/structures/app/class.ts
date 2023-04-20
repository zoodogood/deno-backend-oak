
import { Document } from '@core/database/deps.ts';
import Model from './schema.ts';
import type { ISchema } from './schema.ts';


class App {
	
	document?: Document & ISchema;

	async fetch(){
		const name = "App";
		const document = (await Model.findOne({name})) ?? new Model({name});
		if (!document){
			// to-do: Не допустить возникновения ошибки на этом этапе
			throw new Error();
		}
		document.save();
		
		this.document = document;
	}
}

export { App };
export default App;