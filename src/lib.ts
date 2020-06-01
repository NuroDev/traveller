const BASE_URL: string = "https://api.turnip.exchange/islands";

export interface params_schema {
  top_islands: number;
  min_price: number;
  max_price: number;
}

export interface island_schema {
  background: string;
  category: string;
  clown: number;
  creationTime: string;
  description: string;
  discordOnly: number;
  fee: number;
  fruit: string;
  heart: number;
  hemisphere: string;
  islandScore: number;
  islandTime: string;
  islander: string;
  live: number;
  maxQueue: number;
  messageID: string;
  name: string;
  patreon: number;
  patreonOnly: number;
  poop: number;
  queued: string;
  rating: number;
  ratingCount: number;
  thumbsdown: number;
  thumbsupt: number;
  turnipCode: string;
  turnipPrice: number;
  watchlist: number;
}

export class TurnipExchange {
  private top_islands: number;
  private min_price: number;
  private max_price: number;

  constructor(params?: params_schema) {
    this.top_islands = params?.top_islands || 1;
    this.min_price = params?.min_price || 300;
    this.max_price = params?.max_price || 1000;
  }

  public async get_all() {
    // Fetch the data from the turnip exchange API
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        islander: "neither",
        category: "turnips",
      }),
    });

    // Convert the response to json
    const json = await response.json();

    let islands: island_schema[] = <island_schema[]> json.islands;

    islands.forEach((island) => {
      // TODO: Simplify
      if (island.turnipPrice < this.min_price) {
        const index = islands.indexOf(island, 0);

        if (index > -1) {
          islands.splice(index, 1);
        }
      }

      // TODO: Simplify
      if (island.turnipPrice > this.max_price) {
        const index = islands.indexOf(island, 0);

        if (index > -1) {
          islands.splice(index, 1);
        }
      }
    });

    islands = islands.sort((a, b) => a.turnipPrice - b.turnipPrice);

    return islands;
  }

  public async get(num?: number) {
    const islands = await this.get_all();

    const num_islands: number = num || this.top_islands;

    return islands.slice(Math.max(islands.length - num_islands, 0));
  }
}
