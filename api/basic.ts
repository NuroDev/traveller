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

  const body: string = JSON.stringify(result);

  console.log(`Response: ${body}`);

  return {
    statusCode: 200,
    body,
    headers: {
      "content-type": "application/json",
    },
  };
}
