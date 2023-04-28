import { database } from "@core/exports.ts";

class Document<T> {
  #model: Model<T>;

  constructor(data: Partial<T>, model: Model<T>) {
    this.#model = model;
    Object.assign(this, data);
  }

  async update(filter: Partial<T>) {
    const data = Object.fromEntries(Object.entries(this));

    const { data: response, error } = await this.#model.db
      .from(this.#model.table)
      .update(data)
      .match(filter);

    if (error) {
      throw error;
    }

    const document = Array.isArray(response) && response[0];
    if (!document) {
      return;
    }

    Object.assign(this, document);
  }
}

class Model<T> {
  db: typeof database;
  table: string;

  constructor(table: string, db: typeof database) {
    this.db = db;
    this.table = table;
  }

  async fetchOne(data: Partial<T>) {
    const { data: response, error } = await this.db
      .from(this.table)
      .select()
      .match(data);

    if (error) {
      throw error;
    }

    const document = response.at(0);
    if (!document) {
      return null;
    }

    return new Document<T>(document as T, this);
  }

  async insertOne(data: Partial<T>): Promise<Document<T> & Partial<T>> {
    const { error } = await this.db.from(this.table).insert(data);

    if (error) {
      throw error;
    }

    return new Document(data, this) as Document<T> & Partial<T>;
  }
}

export { Model, Document };
