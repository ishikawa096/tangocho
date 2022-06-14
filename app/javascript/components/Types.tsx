export type CardType = {
  id: number;
  word: string;
  answer: string;
};

export interface CardListType extends Array<CardType> {}
