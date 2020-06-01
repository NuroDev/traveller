# traveller
🌱 Simple Deno module to fetch top islands from [turnip.exchange](https://turnip.exchange/)

[![License](https://img.shields.io/badge/-mit-blue.svg?longCache=true&style=for-the-badge)](https://github.com/nurodev/traveller/blob/master/LICENSE) 
[![Deno Version](https://img.shields.io/badge/deno->=1.0.0-red.svg?longCache=true&style=for-the-badge)](https://github.com/denoland/deno)
[![Deno STD Version](https://img.shields.io/badge/std-0.52.0-brightgreen.svg?longCache=true&style=for-the-badge)](https://github.com/denoland/deno)

# Usage
```typescript
import { TurnipExchange } from 'https://raw.githubusercontent.com/NuroDev/traveller/master/mod.ts';

const turnips = new TurnipExchange();

const result = await turnips.get(3);

console.log(result);
```

## Example
```shell
deno run --allow-net https://raw.githubusercontent.com/NuroDev/traveller/master/examples/get.ts
```
