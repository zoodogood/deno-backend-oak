import DenoConfig from "@root/deno.json" assert { type: "json" };
import * as Path from "https://deno.land/std@0.184.0/path/mod.ts";

function PathWithAlliasToAbsolutePath(
  allias: keyof typeof DenoConfig.imports,
  subpatch?: string | string[]
): string {
  if (typeof subpatch === "object") {
    subpatch = subpatch.join("/");
  }

  subpatch ||= "";

  const path = import.meta.resolve(allias.concat(subpatch));
  return Path.fromFileUrl(path);
}

export { PathWithAlliasToAbsolutePath };
