import { TurnipExchange } from '../mod.ts';

(async () => {
    const turnips = new TurnipExchange();

    const result = await turnips.get_all();

    console.log(result[0]);
})().catch(err => {
    throw new Error(err);
});
