import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    Context,
} from 'https://deno.land/x/lambda/mod.ts';
import { TurnipExchange } from '../mod.ts';

export async function handler(
event: APIGatewayProxyEvent,
context: Context
): Promise<APIGatewayProxyResult> {
    const { queryStringParameters } = event;

    const numIslands: number = Number(queryStringParameters?.islands) || 1;

    console.log(`Number of Islands: ${numIslands}`);

    const turnips: TurnipExchange = new TurnipExchange();

    const result = await turnips.get(numIslands);

    const result_str = JSON.stringify(result);

    console.log(`Response: ${result_str}`);

    return {
        statusCode: 200,
        body: result_str,
        headers: {
            'content-type': 'application/json',
        },
    };
}
