// domain types
export interface IServiceProvider {
  getData: () => Promise<Card[]>;
}

// component types
export type CardList = {
  cards: Card[];
};

export type Card = {
  id: number;
  name: string;
  imageUrl: string;
};
