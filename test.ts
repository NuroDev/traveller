import { assert } from "https://deno.land/std@0.52.0/testing/asserts.ts";
import { TurnipExchange } from "./mod.ts";

Deno.test("get", async () => {
  const turnips = new TurnipExchange();

  const result = await turnips.get(3);

  assert(result);
});

Deno.test("get_all", async () => {
  const turnips = new TurnipExchange();

  const result = await turnips.get_all();

  assert(result);
});
