export type CardType = {
  id: number;
  word: string;
};

export interface CardListType extends Array<CardType> {}
