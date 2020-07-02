# traveller
🌱 Simple Deno module to fetch top islands from [turnip.exchange](https://turnip.exchange/)

[![License](https://img.shields.io/badge/-mit-blue.svg?longCache=true&style=for-the-badge)](https://github.com/nurodev/traveller/blob/master/LICENSE)
[![Build](https://img.shields.io/github/workflow/status/nurodev/traveller/%F0%9F%94%A8%20Build?label=%20&logo=github&logoColor=white&style=for-the-badge)](https://github.com/NuroDev/traveller/actions?query=workflow%3A%22%F0%9F%94%A8+Build%22) 
[![Deno Version](https://img.shields.io/badge/deno->=1.0.0-red.svg?longCache=true&style=for-the-badge)](https://github.com/denoland/deno)
[![Deno STD Version](https://img.shields.io/badge/std-0.52.0-brightgreen.svg?longCache=true&style=for-the-badge)](https://github.com/denoland/deno)

## 🔨 Usage
```typescript
import { TurnipExchange } from 'https://raw.githubusercontent.com/nurodev/traveller/master/mod.ts';

const turnips = new TurnipExchange();

const result = await turnips.get(3);

console.log(result);
```

## 🚀 Example
```shell
deno run --allow-net https://raw.githubusercontent.com/nurodev/traveller/master/examples/get.ts
```

## ✅ Tests
```shell
deno run --allow-net https://raw.githubusercontent.com/nurodev/traveller/master/test.ts
```
