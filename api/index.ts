import {
  createNowFn,
  NowRequest,
  NowResponse,
} from "https://denopkg.com/grikomsn/deno-create-now-fn/mod.ts";
import { TurnipExchange } from "../mod.ts";

// TODO: Convert to using vercel-deno (https://github.com/TooTallNate/vercel-deno)
export const handler = createNowFn(
  async (req: NowRequest, res: NowResponse) => {
    // Get the request query parameters if they exist & define the
    // number of islands to fetch (Default: 1)
    const numIslands: number = Number(req.query.islands) || 1;
    console.log(`Number of Islands: ${numIslands}`);

    // Get the islands
    const turnips: TurnipExchange = new TurnipExchange();
    const result = await turnips.get(numIslands);
    console.log(`Response: ${JSON.stringify(result)}`);

    res.json(result);
  },
);
