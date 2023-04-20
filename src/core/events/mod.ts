import EventsEmitter from "./deps.ts";
import * as _collection from "./collection/mod.ts";

interface ICollection {
  [key: string]: (...args: unknown[]) => unknown;
}

class Events<T extends ICollection> {
  #collection: T;
  emitter: EventsEmitter<{ [K in keyof T]: T[K] }>;

  constructor(collection: T) {
    this.#collection = collection;
    this.emitter = new EventsEmitter();
  }

  handle(key: keyof T): void {
    this.emitter.on(key, this.#collection[key]);
  }

  remove(key: keyof T): void {
    this.emitter.off(key, this.#collection[key]);
  }

  handleAll() {
    for (const key in this.#collection) {
      this.handle(key);
    }
  }
}

const events = new Events(_collection);

export { Events, events };
