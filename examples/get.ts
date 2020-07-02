import { TurnipExchange } from "../mod.ts";

(async () => {
  const turnips = new TurnipExchange();

  const result = await turnips.get(3);

  console.log(result);
})().catch((err) => {
  throw new Error(err);
});
