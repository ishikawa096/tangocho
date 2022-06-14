import React from "react";
import { Link, NavLink } from 'react-router-dom';
import { CardType, CardListType } from "./Types";

type Props = {
  cards: CardListType;
}

const CardList: React.FC<Props> = ({ cards }) => {
  const renderCards = (cardArray: CardListType) => {
    cardArray.sort((a: CardType, b: CardType) => b.id - a.id);
    return cardArray.map((card: CardType) => (
      <li key={card.id}>
        <NavLink to={`/cards/${card.id}`}>
          {card.word}
          {' - '}
          {card.answer}
        </NavLink>
      </li>
    ));
  };
  return (
    <section className="cardList">
      <h2>
        Cards
        <Link to="/cards/new">New Card</Link>
      </h2>
      <ul>{renderCards(cards)}</ul>
    </section>
  );
};

export default CardList;