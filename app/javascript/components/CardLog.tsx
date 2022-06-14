import React from "react";
import { CardType, CardListType } from "./Types";

type Props = {
  cards: CardListType;
}

const CardLog: React.FC<Props> = ({ cards }) => {
  const renderCards = (cardArray: CardListType) => {
    cardArray.sort((a: CardType, b: CardType) => b.id - a.id);
    return cardArray.slice(0,5).map((card: CardType) => (
      <li key={card.id}>
        {card.word}
        {' - '}
        {card.answer}
      </li>
    ));
  };
  return (
    <section className="cardList">
      <ul>{renderCards(cards)}</ul>
      <ul><li>▼5個以上折りたたみ</li></ul>
    </section>
  );
};

export default CardLog;
