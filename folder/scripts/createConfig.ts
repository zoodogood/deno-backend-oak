import { PathWithAlliasToAbsolutePath } from "@lib/PathWithAlliasToAbsolutePath.ts";

const root = PathWithAlliasToAbsolutePath("@root/");

Deno.copyFile(
  `${root}folder/development/config.json.ts.example`,
  `${root}config.json.ts`
);
