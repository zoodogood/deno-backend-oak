import mongoose from "./deps.ts";

export async function startApp(): Promise<void> {
  await mongoose.connect("mongodb://localhost:27017");
}

export const mongooseApp = mongoose;
