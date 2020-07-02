import { island_schema, params_schema } from "./types.ts";

const BASE_URL: string = "https://api.turnip.exchange/islands";

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

    // Sort by price
    islands = islands.sort((a, b) => a.turnipPrice - b.turnipPrice);

    return islands;
  }

  public async get(num?: number) {
    const islands = await this.get_all();

    const num_islands: number = num || this.top_islands;

    return islands.slice(Math.max(islands.length - num_islands, 0));
  }
}
