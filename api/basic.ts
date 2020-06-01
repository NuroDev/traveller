import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "https://deno.land/x/lambda/mod.ts";
import { TurnipExchange } from "../mod.ts";

export async function handler(
  event: APIGatewayProxyEvent,
  context: Context,
): Promise<APIGatewayProxyResult> {
  const turnips: TurnipExchange = new TurnipExchange();

  const result = await turnips.get_all();

  console.log(`Response: ${JSON.stringify(result)}`);

  return {
    statusCode: 200,
    body: JSON.stringify(result),
    headers: {
      "content-type": "application/json",
    },
  };
}
